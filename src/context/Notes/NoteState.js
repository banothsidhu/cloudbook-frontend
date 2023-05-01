import React, { useState } from 'react'
import NoteContext from './NoteContext'
import showToast from '../../components/Toastify';

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = {}
    const [notes, setNotes] = useState(notesInitial)

    //Get Note --------------------

    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGRlNTdkYzc2M2UyNmIxM2Y2Y2UyMCIsImlhdCI6MTY4MjgyOTgyNH0.X6VlWujNH-FIDIDS2-hBVy0aUkvSNHXMrML0woIvg54"
            }

        })
        const data = await response.json()
        setNotes(data);
        console.log(data)




    };


    //Add Note---------------

    const addNote = async (title, description, tag) => {
        try {
            const response = await fetch(`${host}/api/notes/addnote`, {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGRlNTdkYzc2M2UyNmIxM2Y2Y2UyMCIsImlhdCI6MTY4MjgyOTgyNH0.X6VlWujNH-FIDIDS2-hBVy0aUkvSNHXMrML0woIvg54"
                },
                body: JSON.stringify({ title, description, tag })
            });

            if (response.ok) {
                const data = await response.json();
                showToast("success", "Added Notes");
                setNotes(notes.concat(data));
            } else {
                throw new Error(`HTTP error ${response.status}`);
            }
        } catch (error) {
            console.error("Error adding note:", error.message);
            showToast("error", "Error adding note");
        }
    };


    // Edit Note------------------------------

    const editNote = async (id, title, description, tag) => {
        const response = fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0"
            },
            body: JSON.stringify({ id, title, description })
        });


        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag
            }
        }

    };

    // Delete Note---------------------------

    const deleteNote = async (id) => {
        try {
          const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGRlNTdkYzc2M2UyNmIxM2Y2Y2UyMCIsImlhdCI6MTY4MjgyOTgyNH0.X6VlWujNH-FIDIDS2-hBVy0aUkvSNHXMrML0woIvg54"

            }
          });
      
          if (response.ok) {
            const newNotes = notes.filter((note) => note._id !== id);
            showToast("success", "Deleted");
            setNotes(newNotes);
          } else if (response.status === 401) {
            
            showToast("error", "Unauthorized");
          } else {
            // Handle other errors
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