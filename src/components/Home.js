import React from 'react'
import Notes from './Notes'
import { ToastContainer } from 'react-toastify';
export default function Home() {
  return (
    <div className='m-4'>
      <h2>Add A Note</h2>
      <form className='my-4'>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    <Notes></Notes>
    <ToastContainer></ToastContainer>
    </div>
  )
}
