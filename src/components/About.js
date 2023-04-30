import React, { useEffect } from 'react'
import { useContext } from 'react'
import noteContext from '../context/Notes/NoteContext'
import { useState } from 'react';

export default function About() {
  const a = useContext(noteContext)
  useEffect(() => {
    a.update()
    //eslint-disable-next-line
    
  }, []);
  return (
    <div>
      This is About page and my name is {a.state.name}
    </div>
  )
}
