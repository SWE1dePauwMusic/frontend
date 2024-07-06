import React from 'react';

import './BaseLayout.css';
import {Navbar} from "../Navbar/Navbar";
import {Sidebar} from "../Sidebar/Sidebar";
import WebPlayback from "../SDK_WebPlayer/WebPlayback";

const BaseLayout = ({ children }) => {
    return (
        <div className="base-layout">
            <Navbar />
            <div className="main-content">
                <div className="page-content">
                    {children}
                </div>
            </div>
            <div className="web-playback">
                <WebPlayback />
            </div>
        </div>
    );
};

export default BaseLayout;