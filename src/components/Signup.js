import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import showToast from '../components/Toastify';

export default function Login() {

    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    async function login(ev) {
        ev.preventDefault();

        try {
            const response = await fetch('https://cloudbook-backend-new.vercel.app/api/auth/createuser', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name,email, password })
            })

            if (response.ok) {
                const data = await response.json();
                document.cookie = `auth_token=${data.token}; path=/`;
                showToast('success', "SignUp successfully. Please login Now");
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
            } else {
                showToast('error', "Invalid credentials");
            }
        } catch (error) {
            showToast('error', "An error occurred while Signing up.");
            console.error(error);
        }
    }

    if (redirect) {
        return <Navigate to={'/login'} />
    }

    return (
        <div className="text-center" id="formOfLogin">
            <main className="form-signin">
                <form className='login' onSubmit={login}>
                    <h1 className="h3 mb-3 fw-normal"><strong>Signup</strong> MyCloudBook</h1>
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingName" placeholder='Name' value={name} onChange={ev => setName(ev.target.value)} />
                        <label htmlFor="floatingName">Name</label>
                    </div>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder='Email' value={email} onChange={ev => setEmail(ev.target.value)} />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={ev => setPassword(ev.target.value)} />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div>
                        <Link to="/login">Login?</Link>
                    </div>

                    <button className="w-100 btn btn-lg btn-success" type="submit">SignUp</button>
                    <p className="mt-5 mb-3 text-muted"><strong>Made By B.Sidharth on May 5th 2023</strong></p>
<h1 className="h3 mb-3 fw-normal"><strong>Jai Shree Ram 🚩</strong></h1>

                </form>
            </main>
        </div>
    );
}
