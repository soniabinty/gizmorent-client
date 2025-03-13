import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <p>&copy; {new Date().getFullYear()} GizmoRent. All rights reserved.</p>
            </div>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
    textAlign: 'center',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
};

const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
};

export default Footer;