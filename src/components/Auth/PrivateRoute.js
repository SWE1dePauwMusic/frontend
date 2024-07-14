// src/components/PrivateRoute.js
import React from 'react';
import {Route, Navigate, useLocation} from 'react-router-dom';
import {getTokenHandler} from "../../utils/tokenHandling";

const PrivateRoute = ({ children }) => {
    const token  = getTokenHandler("accessToken");  // Assume useAuth returns the current authentication status/token
    console.log("Private Route", token)
    const location = useLocation();  // Get current location context

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;  // User is authenticated, render the protected component
};

export default PrivateRoute;
