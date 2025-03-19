import React from 'react';

export default function About() {
  
    const styles = {
        container: {
            fontFamily: "'Poppins', sans-serif",
            color: '#333',
            backgroundColor: '#F5FFFA',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        },
        card: {
            maxWidth: '800px',
            backgroundColor: '#FFFFFF',
            padding: '30px',
            borderRadius: '12px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
        },
        header: {
            fontSize: '2rem',
            color: '#2E8B57',
            fontWeight: '600',
            marginBottom: '15px'
        },
        text: {
            fontSize: '1.1rem',
            lineHeight: '1.7',
            color: '#444',
            marginBottom: '15px'
        },
        highlight: {
            color: '#006400',
            fontWeight: 'bold'
        },
        link: {
            color: '#008000',
            textDecoration: 'none',
            fontWeight: 'bold'
        },
        footer: {
            marginTop: '30px',
            fontSize: '0.9rem',
            color: '#555'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.header}>About Me</h1>
                <p style={styles.text}>
                    Hi, I'm <span style={styles.highlight}>Sidharth</span>, a <span style={styles.highlight}>dedicated web developer</span> with a passion for building modern, scalable, and user-friendly applications. 
                </p>
                <p style={styles.text}>
                    At just 17, I developed <a href="https://mycloudbook.vercel.app" target="_blank" rel="noopener noreferrer" style={styles.link}>MyCloudBook</a> using <span style={styles.highlight}>React</span>, aiming to create a seamless and efficient platform for digital note-keeping.
                </p>
                <p style={styles.text}>
                    My interests extend beyond web development into areas like <span style={styles.highlight}>artificial intelligence, cybersecurity, and data science</span>, where I continually explore emerging technologies to stay ahead in the field.
                </p>
                <p style={styles.text}>
                    I believe in <span style={styles.highlight}>continuous learning, problem-solving, and innovation</span>. Whether it's crafting intuitive UI/UX experiences or optimizing backend performance, I strive to deliver excellence in every project I undertake.
                </p>
                <p style={styles.footer}>&copy; 2024 Sidharth | Always Innovating</p>
            </div>
        </div>
    );
    
