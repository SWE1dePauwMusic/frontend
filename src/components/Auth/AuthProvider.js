// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import {getTokenHandler, isTokenExpired, storeTokenHandler} from "../../utils/tokenHandling";
import {getToken, refreshAccessToken} from "../../Services/Auth";

const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);            Will consider use this later - now storing in SessionStorage

export const AuthProvider = ({ children }) => {
    // const [token, setToken] = useState('');

    const fetchToken = async () => {
       if (isTokenExpired()){                                                   //Still not properly handle Token Expired
            // Assuming getToken and refreshAccessToken are functions you will implement
            const newToken = await getToken('/auth/token');
            storeTokenHandler('accessToken', newToken); // Store new token in localStorage
       }
       // setToken(getTokenHandler);
    };


    useEffect(() => {
        console.log('useEffect at AuthProvider')
        fetchToken();

        const intervalId = setInterval(async () => {
            await refreshAccessToken();
        }, 900000); // Refresh token every 15 minutes
        return () => clearInterval(intervalId);
    }, []);


    return (
        <AuthContext.Provider  >
            {children}
        </AuthContext.Provider>
    );
};
