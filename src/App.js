import "./App.css";
import {useEffect, useState} from "react";
import Login from "./components/SDK_WebPlayer/Login";
import {Route, Routes, Navigate, useNavigate,} from 'react-router-dom';

import { CurrentSong } from "./pages/CurrentSong/CurrentSong";
import BaseLayout from "./components/BaseLayOut/baseLayout";
import Playlist from "./components/Playlists/Playlist2";
import SongCard2 from "./components/Card/SongCard/SongCard2";
import {TopTrack} from "./pages/TopTrack-Recommendation/ToptrackRec";
import {getTokenHandler} from "./utils/tokenHandling";
import {AuthProvider} from "./components/Auth/AuthProvider";
import PrivateRoute from "./components/Auth/PrivateRoute";
import {getToken, refreshAccessToken} from "./Services/Auth";
import {LikedPlaylist} from "./pages/TopTrack-Recommendation/LikedPlaylist";
import {PlaylistWithId} from "./pages/PlaylistId/PlaylistId_Page";
import UserPlaylists from "./pages/UserPlaylist/ListPlaylist";


function App() {
    const navigate = useNavigate();

    return (
        <AuthProvider>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Navigate to="/main" replace />} />
                <Route path="/main" element={<BaseLayout/>}>
                        <Route path='' element={
                            <>
                                <button onClick={() =>
                                    navigate('main/topTrack')}> Top track</button>
                                <button onClick={() =>
                                    navigate('main/user-playlists')}> User Playlists</button>
                                <button onClick={() =>
                                    navigate('/main/liked-playlist')}> Liked Playlist</button>
                            </>
                        }/>
                        <Route path="topTrack" element={<TopTrack />} />
                        <Route path="user-playlists" element={<UserPlaylists />} />
                        <Route path="liked-playlist" element={<LikedPlaylist />} />
                        <Route path={"playlist/:playlistId"} element={<PlaylistWithId />} />
                </Route>
                {/* Additional routes can be added here if necessary */}
            </Routes>
        </AuthProvider>
    );
}

export default App;
