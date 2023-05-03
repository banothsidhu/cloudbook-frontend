import React, { useContext, useEffect, useRef, useState } from 'react';
import noteContext from "../context/Notes/NoteContext";
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import showToast from './Toastify';
import { Navigate } from 'react-router';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote, } = context;
  const [redirect, setRedirect] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (localStorage.getItem) {
          await getNotes();
        }

        if (!token) {
          showToast("error", "Please login");
          setRedirect(true);
          return;
        }

      } catch (error) {
        showToast("error", "Error getting notes");
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null)
  const refClose = useRef(null)
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

  const updateNote = (id, currentNote) => {
    ref.current.click();
    setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    getNotes()
  }


  const handleClick = async (e) => {
    try {
      console.log("Updating the note...", note)
      await editNote(note.id, note.etitle, note.edescription, note.etag);
      refClose.current.click();
    } catch (error) {
      showToast("error", "Error updating note");
    }
  }

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }
  if (redirect) {
    return <Navigate to={'/login'} />
  }

  return (
    <>

      <button ref={ref} type="button" className="btn btn-success d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} rows="5" cols="40" />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>

              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-success">Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <h3 className='m-1 text-center' style={{ padding: '0', height: "10vh" }}>
          Your Notes
          <span className='rounded-pill badge text-bg-success '>
            {Object.keys(notes).length}
          </span>
        </h3>
        <div className='row justify-content-center align-items-center'>
          {Object.keys(notes).map((key) => (
            <NoteItem key={key} note={notes[key]} updateNote={(id) => updateNote(id, notes[key])} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Notes