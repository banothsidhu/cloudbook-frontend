import React, { useContext } from 'react'
import noteContext from '../context/Notes/NoteContext'
import NoteItem from './NoteItem'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes } = context

    return (
        <div className='container'>
            <h3 className='my-3 text-center'>Your Notes</h3>
            <div className='row justify-content-center align-items-center'>
                {notes.map((note) => (
                    <NoteItem key={note._id} note={note} />
                ))}
            </div>
        </div>
    )
}

export default Notes
