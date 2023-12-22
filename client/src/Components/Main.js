import React, { useState, useEffect } from 'react';
import '../css/home.css';
import Cookies from 'js-cookie';

const Main = () => {
    const [userName, setUserName] = useState('');
    const [userImage, setUserImage] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userDataFromCookie = Cookies.get('sakemaru');
                console.log(userDataFromCookie)

                if (userDataFromCookie) {
                    const parsedUserData = JSON.parse(userDataFromCookie);
                    console.log(parsedUserData)
                    if (parsedUserData.displayName) {
                        setUserName(parsedUserData.displayName);

                    }
                    if (parsedUserData.image) {
                        setUserImage(parsedUserData.image);
                    }
                }
            } catch (error) {
                console.error('Error fetching User:', error);
            }
        };

        fetchUserData();
    }, []);
    const handleLogout = async () => {
        var headers = new Headers();

    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000/home');
    headers.append('Access-Control-Allow-Credentials', 'true');

    headers.append('GET', 'POST', 'OPTIONS');
    
        try {
            const response = await fetch('http://localhost:6005/logout', {
                method: 'GET',
                headers: headers
            });

            if (response.status === 200) {
                window.location.href = 'http://localhost:3000';
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <div className="container">
                <nav className="navbar">
                    <div className="user-info">
                        <img src={userImage} alt="User" className="user-image" />
                        <span className="user-name">{userName}</span>
                    </div>
                    <button onClick={handleLogout}>Logout</button>
                </nav>
                <h1 className="animate__animated animate__fadeIn">Document Summarization</h1>
                <h1>Welcome</h1>
            </div>
        </div>
    );
};

export default Main;
