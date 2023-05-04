import React, { useState } from 'react'
import NoteContext from './NoteContext'
import showToast from '../../components/Toastify';
import { useNavigate } from 'react-router-dom';


// inside the component

const NoteState = (props) => {
    const navigate = useNavigate();


    const [redirect, setRedirect] = useState(false);
    const host = "https://cloudbook-backend-p40pa049s-banothsidhu.vercel.app"
    const notesInitial = {}
    const [notes, setNotes] = useState(notesInitial)

    // Get Note --------------------


    const getNotes = async () => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${host}/api/notes/fetchallnotes`, {
                method: 'GET',
                headers: {
                    "content-type": "application/json",
                    "auth-token": token
                }
            })
            if (response.ok) {
                const data = await response.json()
                setNotes(data);
                console.log(data)

            } else if (response.status === 401) {
                showToast("error", "Please Login"); navigate('/login')

            }
            else {
                showToast("error", "Error getting note")
            }
        } catch (error) {
            console.error("Error getting notes:", error.message);
            showToast("error", "Error getting notes");
        }
    };

    // Add Note---------------

    const addNote = async (title, description, tag) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    "auth-token": token
                },
                body: JSON.stringify({ title, description, tag })
            });

            if (response.ok) {
                const data = await response.json();
                showToast("success", "Added Notes");
                setNotes(notes.concat(data));
            } else if (response.status === 401) {
                showToast("error", "Please Login"); navigate('/login')
            }
            else {
                showToast("error", "Error adding note")
            }
        } catch (error) {
            console.error("Error adding note:", error.message);
            showToast("error", "Error adding note");
        }
    };


    // Edit Note------------------------------

    const editNote = async (id, title, description, tag) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
                method: 'PUT',
                headers: {
                    "content-type": "application/json",
                    "auth-token": token
                },
                body: JSON.stringify({ title, description, tag })
            });

            if (response.ok) {
                const data = await response.json();
                showToast("success", "Updated Note");
                setNotes(notes.map((note) => {
                    if (note._id === id) {
                        return {
                            ...note,
                            title,
                            description,
                            tag
                        };
                    }
                    return note;
                }));
            } else if (response.status === 401) {
                showToast("error", "Please Login"); navigate('/login')
            }
            else {
                showToast("error", "Error updating note")
            }
        } catch (error) {
            showToast("error", "Error updating note");
        }
    };
    // Delete Note---------------------------

    const deleteNote = async (id) => {
        const token = localStorage.getItem('token');

        try {
            const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token
                }
            });

            if (response.ok) {
                const newNotes = notes.filter((note) => note._id !== id);
                showToast("success", "Deleted");
                setNotes(newNotes);
            } else if (response.status === 401) {
                showToast("error", "Please Login"); navigate('/login') // Redirect to login page
            } else if (response.status === 404) {
                showToast("error", "Note Already deleted")
            } else {
                showToast("error", "Error deleting note");
            }
        } catch (err) {
            showToast("error", "Error deleting note");
        }
    };


    return (
        <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
};
export default NoteState