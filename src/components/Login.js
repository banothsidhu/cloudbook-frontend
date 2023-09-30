import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import showToast from '../components/Toastify';
import noteContext from "../context/Notes/NoteContext";

export default function Login() {
  const context = useContext(noteContext);
  const { getNotes } = context;



  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [email, setEmail] = useState('');

  async function login(ev) {
    ev.preventDefault();

    try {
      const response = await fetch('https://cloudbook-backend-new.vercel.app/api/auth/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password })
      })

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        localStorage.setItem('token', data);
        showToast('success', "Logged in successfully");
        


        setRedirect(true);
      } else {
        showToast('error', "Invalid credentials");
      }
    } catch (error) {
      showToast('error', "An error occurred while logging in.");
      console.error(error);
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <div className="text-center" id="formOfLogin">
      <main className="form-signin">
        <form className='login' onSubmit={login}>
          <h1 className="h3 mb-3 fw-normal"><strong>Login </strong>MyCloudBook</h1>

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder='Email' value={email} onChange={ev => setEmail(ev.target.value)} />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div>
            <Link to="/signup">Register?</Link>
          </div>

          <button className="w-100 btn btn-lg btn-success" type="submit">Login</button>
          <p className="mt-5 mb-3 text-muted"><strong>Made By B.Sidharth on May 5th 2023</strong></p>
    <p className="mt-5 mb-3 text-muted"><strong>Made in BHARAT 🇮🇳</strong></p>
        </form>
      </main>
    </div>
  );
}
