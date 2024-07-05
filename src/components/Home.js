import React from 'react';
import { useLocation } from 'react-router-dom';

const HomeTest = () => {
    const location = useLocation();
    const { userData } = location.state || {};
    console.log(userData.access_token)
    console.log(userData.expires_in)
    return (
        <div>
            <h1>Dashboard</h1>
            {userData ? (
                <>
                    <h2>Access Token: {userData.access_token}</h2>
                </>
            ) : (
                <p>No user data available</p>
            )}
        </div>
    );
};

export default HomeTest;