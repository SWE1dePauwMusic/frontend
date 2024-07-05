import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Callback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if (code) {
            // Send the code to the backend to exchange for an access token
            axios.get(`http://localhost:8012/services/auth/v1/user/account/google/callback?code=${code}`)
                .then(response => {
                    // Handle the response, e.g., save the tokens and user info to local storage or state
                    console.log('Response:', response);
                    // Redirect or handle post-authentication flow
                    navigate('/home', { state: { userData: response.data } })                })
                .catch(error => {
                    console.error('Error exchanging code:', error);
                    // Handle error, e.g., show an error message or redirect to an error page
                });
        } else {
            // Handle missing code error
            console.error('Authorization code not found');
        }
    }, []);

    return (
        <div>
            <h1>Loading...</h1>
        </div>
    );
};

export default Callback;
