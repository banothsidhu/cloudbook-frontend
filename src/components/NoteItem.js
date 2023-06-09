import React, { useContext } from 'react';
import "./NoteitemCss.css";
import noteContext from '../context/Notes/NoteContext';

const NoteItem = (props) => {
  const context = useContext(noteContext)
  const { note ,updateNote} = props;
  const { deleteNote } = context;



  return (
    <>
      <div className='col-sm-12 col-md-8 col-lg-6 mx-auto my-2'>
        <div className="card" style={{ width: 'auto', minWidth: '20rem', padding: '0.3rem', boxShadow: '0 2px 8px rgba(0,0,0,0.3)', borderRadius: '5px', backgroundColor: 'white' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' ,flexDirection:"column" }}>
          {/* <span className='Center  font-weight-bold' style={{ display: 'inline-block', width: '50%', textAlign: 'center', borderRadius: "5px", backgroundColor: "#777777", padding: '0.2rem',color:"green" ,fontSize:"20px" }}>
              
            </span> */}
            {note.tag !== '' ? 
              <span className='Center  font-weight-bold my-3' style={{ display: 'inline-block', width: '40%', textAlign: 'center', borderRadius: "5px", backgroundColor: "green", padding: '0.2rem',color:"white" ,fontSize:"20px" }}>
                {note.tag}
              </span> :
              null
            }
          </div>
          <div className="card-body d-flex flex-column">
            <div className="d-flex align-items-center">
              <h5 className="card-title"><strong>{note.title}</strong></h5>
              <div className='ml-auto'>
                <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }} ></i>
                <i className="fa-solid fa-edit mx-2"onClick={()=>{updateNote(note)}}></i>
              </div>
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
