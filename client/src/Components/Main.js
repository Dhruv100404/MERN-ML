import React from 'react';
import '../css/home.css';

const Main = () => {


    const userName = "hi";
    //const userImage = "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg";

    const handleLogout = async () => {
        try {
            const response = await fetch('http://localhost:6005/logout', {
                method: 'GET',
                credentials: 'include', // Ensure to include credentials for sending cookies
            });

            if (response.status === 200) {
                // Redirect or perform other actions after successful logout
                window.location.href = 'http://localhost:3000'; // Redirect to homepage
            } 
        } catch (error) {
            console.error('Logout error:', error);
        }


    };

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <div className="container">
                    <nav className="navbar">
                        <div className="user-info">
                            <img src="https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg" alt="User" className="user-image" />
                            <span className="user-name">{userName}</span>
                        </div>
                        <button onClick={handleLogout}>Logout</button>
                    </nav>
                    <h1 className="animate__animated animate__fadeIn">Document Summarization</h1>
                    <h1>Welcome</h1>
                </div>
            </div>
        </>
    );
};

export default Main;
