import React, { useState } from 'react'
import NoteContext from './NoteContext'
const NoteState = (props) => {
    const s1 = {
        "name": "MyName",
        "className": "Nothing"
    }
    const [state, setState] = useState(s1);

    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Sidhu",
                "className": "Something"
            })
        }, 1000);
    };

    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
};
export default NoteState