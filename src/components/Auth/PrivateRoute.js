// src/components/PrivateRoute.js
import React, {useEffect, useState} from 'react';
import {Route, Navigate, useLocation} from 'react-router-dom';
import {getTokenHandler} from "../../utils/tokenHandling";

const PrivateRoute = ({ children }) => {
    const [token, setToken] = useState(null);  // Initialize token as null
    const [isLoading, setIsLoading] = useState(true);  // Track loading state
    const location = useLocation();

    useEffect(() => {
        // Simulate retrieving token from storage or an API with a delay
        setTimeout(() => {
            const retrievedToken = getTokenHandler("accessToken");
            console.log('Retrieved Token:', retrievedToken);
            setToken(retrievedToken);
            setIsLoading(false);  // Update loading state after token is retrieved
        }, 1000);
    }, []);

    // Check if still loading token
    if (isLoading) {
        return <div>Loading...</div>;  // Optionally show a loading indicator or return null
    }

    // After loading, check token validity
    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;  // Render children if the token exists and is valid
};

export default PrivateRoute;


