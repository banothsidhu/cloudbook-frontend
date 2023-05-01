import React, { useContext } from 'react';
import "./NoteitemCss.css";
import showToast from './Toastify';
import noteContext from '../context/Notes/NoteContext';

const NoteItem = (props) => {
  const context = useContext(noteContext)
  const { note } = props;
  const {deleteNote} = context;

  const handleShowToast = (type, message) => () => {
    showToast(type, message);
  };

  return (
    <>
      <div className='col-sm-6 col-md-4 col-lg-3 mx-auto my-2'>
        <div className="card" style={{ width: 'auto', minWidth: "12rem", padding: '0.3rem' }}>
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className="card-title">{note.title}</h5>
              <i className="fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}} ></i>
              <i className="fa-solid fa-edit mx-2"  ></i>
            </div>
            <p className="card-text">The Description of this note is {note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
