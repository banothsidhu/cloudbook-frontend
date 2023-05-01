import React, { useContext, useEffect } from 'react';
import noteContext from '../context/Notes/NoteContext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote, getNotes } = context;

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className='container'>
      <h3 className='my-3 text-center'>
        Your Notes{' '}
        <span className='rounded-pill badge text-bg-primary '>
          {Object.keys(notes).length}
        </span>
      </h3>
      <div className='row justify-content-center align-items-center'>
        {Object.keys(notes).map((key) => (
          <NoteItem key={key} note={notes[key]} />
        ))}
      </div>
    </div>
  );
};

export default Notes;
