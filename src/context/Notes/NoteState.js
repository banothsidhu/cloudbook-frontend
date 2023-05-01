import React, { useState } from 'react'
import NoteContext from './NoteContext'
const NoteState = (props) => {
    const notesInitial = [
        {
            "_id": "644de5d8c763e26b13f6ce2a",
            "user": "644de57dc763e26b13f6ce20",
            "title": "iam sidhu12",
            "description": "asd",
            "tag": "Happy",
            "date": "2023-04-30T03:51:52.995Z",
            "__v": 0
        },
        {
            "_id": "644f2b96b165c743ef3371f7",
            "user": "644de57dc763e26b13f6ce20",
            "title": "This is another Note",
            "description": "Created in inotebook",
            "tag": "Program",
            "date": "2023-05-01T03:01:42.887Z",
            "__v": 0
        },
        {
            "_id": "644f2bc0b165c743ef3371f9",
            "user": "644de57dc763e26b13f6ce20",
            "title": "Wonderful day",
            "description": "Good Day",
            "tag": "happpy",
            "date": "2023-05-01T03:02:24.318Z",
            "__v": 0
        },
        {
            "_id": "644f2bc0b165c743ef3371g1",
            "user": "644de57dc763e26b13f6ce20",
            "title": "Wonderful day",
            "description": "Good Day",
            "tag": "happpy",
            "date": "2023-05-01T03:02:24.318Z",
            "__v": 0
        },
        {
            "_id": "644f2bc0b165c743ef3371g2",
            "user": "644de57dc763e26b13f6ce20",
            "title": "Wonderful day",
            "description": "Good Day",
            "tag": "happpy",
            "date": "2023-05-01T03:02:24.318Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)
    
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
};
export default NoteState