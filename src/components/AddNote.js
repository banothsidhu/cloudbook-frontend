import React, { useContext, useState } from 'react';
import noteContext from '../context/Notes/NoteContext';
import showToast from './Toastify';
const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote, notes } = context
    const [note, setNote] = useState({ title: "", description: "", tag: "default" })

    const handleClick = (e) => {
        e.preventDefault()
        if (note.title.length >= 3 && note.description.length >= 3) {
            addNote(note.title, note.description)
        } else {
            showToast("error","Title or Description must be at least 3 characters")
        }
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    };

    return (
        <div className='m-4'>
            <h2>Add A Note</h2>
            <form className='my-4'>
                <div className="form-group my-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange} name='title' value={note.title} />
                </div>
                <div className="form-group my-3">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" placeholder="Enter Description" onChange={onChange} name='description' value={note.description} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
