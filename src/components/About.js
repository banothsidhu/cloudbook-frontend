import React from 'react';

export default function About() {
  
    const styles = {
        container: {
            fontFamily: "'Poppins', sans-serif",
            color: '#fff',
            background: 'linear-gradient(135deg, #004d00, #008000)',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        },
        card: {
            maxWidth: '850px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            padding: '40px',
            borderRadius: '15px',
            boxShadow: '0 10px 25px rgba(0, 128, 0, 0.2)',
            textAlign: 'center',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            hover: {
                transform: 'scale(1.03)',
                boxShadow: '0 15px 30px rgba(0, 128, 0, 0.3)'
            }
        },
        header: {
            fontSize: '2.5rem',
            color: '#90EE90',
            fontWeight: '700',
            marginBottom: '15px',
            letterSpacing: '1px'
        },
        text: {
            fontSize: '1.2rem',
            lineHeight: '1.8',
            color: '#DFFFD6',
            marginBottom: '20px'
        },
        highlight: {
            color: '#00FF7F',
            fontWeight: 'bold'
        },
        link: {
            color: '#ADFF2F',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: 'color 0.3s ease',
            hover: {
                color: '#32CD32'
            }
        },
        button: {
            backgroundColor: '#00FF7F',
            color: '#004d00',
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '25px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            hover: {
                backgroundColor: '#32CD32',
                transform: 'scale(1.05)'
            }
        },
        footer: {
            marginTop: '30px',
            fontSize: '1rem',
            color: '#DFFFD6',
            opacity: '0.8'
        }
    };

    return (
        <div style={styles.container}>
            <div style={{ ...styles.card, ':hover': styles.card.hover }}>
                <h1 style={styles.header}>About Me</h1>
                <p style={styles.text}>
                    Hey there! I'm <span style={styles.highlight}>Sidharth</span>, a <span style={styles.highlight}>passionate web developer</span> focused on building seamless, high-performance, and intuitive digital experiences.
                </p>
                <p style={styles.text}>
                    At 17, I created <a href="https://mycloudbook.vercel.app" target="_blank" rel="noopener noreferrer" style={{ ...styles.link, ':hover': styles.link.hover }}>MyCloudBook</a> using <span style={styles.highlight}>React</span>, designed to redefine digital note-taking.
                </p>
                <p style={styles.text}>
                    Beyond coding, I explore <span style={styles.highlight}>artificial intelligence, cybersecurity, and data science</span>—bridging the gap between innovation and real-world impact.
                </p>
                <p style={styles.text}>
                    My philosophy? <span style={styles.highlight}>Learn, Innovate, and Elevate.</span> Let’s create something extraordinary!
                </p>
                <button style={{ ...styles.button, ':hover': styles.button.hover }}>Connect with Me</button>
                <p style={styles.footer}>&copy; 2024 Sidharth | Always Innovating</p>
            </div>
        </div>
    );
}
