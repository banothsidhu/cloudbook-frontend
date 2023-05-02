import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  async function login(ev) {
    ev.preventDefault();

  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="text-center" id="formOfLogin">
      <main className="form-signin">
        <form className='login' onSubmit={login}>
          <h1 className="h3 mb-3 fw-normal"><strong>Login </strong>Inotebook</h1>
          <div className="form-floating">
            <input type="Text" className="form-control" id="floatingInput" placeholder='UserName' value={username} onChange={ev => setUsername(ev.target.value)} autoFocus/>
            <label htmlFor="floatingInput">UserName</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div>
            <Link to="/register">Register?</Link>
          </div>

          <button className="w-100 btn btn-lg btn-success" type="submit">Login</button>
          <p className="mt-5 mb-3 text-muted"><strong>Made By B.Sidharth</strong></p>
        </form>
      </main>
    </div>
  );
}
