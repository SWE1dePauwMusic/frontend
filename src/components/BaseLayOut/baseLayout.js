import React, {useEffect, useState} from 'react';

import './BaseLayout.css';
import {Navbar} from "../Navbar/Navbar";
import {Sidebar} from "../Sidebar/Sidebar";
import WebPlayback from "../SDK_WebPlayer/WebPlayback";
import {getTokenHandler} from "../../utils/tokenHandling";
import {getToken, refreshAccessToken} from "../../Services/Auth";
import {useAuth} from "../Auth/AuthProvider";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import PrivateRoute from "../Auth/PrivateRoute";

const BaseLayout = () => {
    // const token = getTokenHandler("accessToken")
    // console.log('token', token)
    // const location = useLocation();
    //
    // // Check if user is not authenticated
    // if (!token) {
    //     // Redirect to login page and remember the last location
    //     return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    console.log("BaseLayout being reloaded !!!!!!!!!")

    return (
        <PrivateRoute>
            <div className="base-layout">
                {/* <Navbar /> */}
                <div className="main-content">
                    <div className="page-content">
                        <Outlet />
                    </div>
                </div>
                <div className="web-playback">
                    <WebPlayback />
                </div>
            </div>
        </PrivateRoute>
    );
};

export default BaseLayout;
