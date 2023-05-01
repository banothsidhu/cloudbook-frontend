import React from 'react'
import Notes from './Notes'
import { ToastContainer } from 'react-toastify';
import AddNote from './AddNote';
export default function Home() {
  return (
    <>
      <AddNote></AddNote>
      <Notes></Notes>
    </>


  )
}
