import React, { useState } from 'react'
// import { useContext } from 'react'
// import noteContext from '../context/Notes/NoteContext'
// import { useState } from 'react';

export default function About() {
  
     const headerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px',
        textAlign: 'center'
    };

    const mainStyle = {
        padding: '20px'
    };

    const aboutSectionStyle = {
        maxWidth: '600px',
        margin: '0 auto'
    };

    const footerStyle = {
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px',
        textAlign: 'center',
        position: 'fixed',
        bottom: '0',
        width: '100%'
    };

    const h2Style = {
        color: '#333'
    };

    const pStyle = {
        lineHeight: '1.6'
    };

    return (
        <div>
            <header style={headerStyle}>
                <h1>About Me</h1>
            </header>
            <main style={mainStyle}>
                <section className="about" style={aboutSectionStyle}>
                    <h2 style={h2Style}>Hello, I'm Sidharth!</h2>
                    <p style={pStyle}>I'm 17 years old and I have a passion for web development. I created <a href="https://mycloudbook.vercel.app" target="_blank" rel="noopener noreferrer">mycloudbook.vercel.app</a> using React because I find love in crafting beautiful and functional websites.</p>
                </section>
            </main>
            <footer style={footerStyle}>
                <p>&copy; 2024 Sidharth</p>
            </footer>
        </div>)
  
}

