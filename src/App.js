
import "./App.css";
import {useEffect, useState} from "react";
import Login from "./components/SDK_WebPlayer/Login";
import {Route, Routes, Navigate, useNavigate,} from 'react-router-dom';

import { CurrentSong } from "./pages/CurrentSong/CurrentSong";
import BaseLayout from "./components/BaseLayOut/baseLayout";
import Playlist from "./components/Playlists/Playlist2";
import UserPlaylists from "./components/Playlists/ListPlaylist";
import SongCard2 from "./components/Card/SongCard/SongCard2";
import {TopTrack} from "./pages/TopTrack-Recommendation/ToptrackRec";
import {getTokenHandler} from "./utils/tokenHandling";
import {AuthProvider} from "./components/Auth/AuthProvider";
import PrivateRoute from "./components/Auth/PrivateRoute";
import {getToken, refreshAccessToken} from "./Services/Auth";



// function App() {
//     const [token, setToken] = useState('');
//     const redirect_uri = '/auth/token';
//     const fetchToken = async () => {
//         const storedToken = getTokenHandler('accessToken');
//         if (storedToken) {
//             setToken(storedToken);
//         } else {
//             const newToken = await getToken(redirect_uri);
//             setToken(newToken);
//         }
//     };
//
//     useEffect(() => {
//         fetchToken();
//
//         const intervalId = setInterval(async () => {
//             const newAccessToken = await refreshAccessToken();
//             setToken(newAccessToken)
//         }, 900000);   //15minutes
//
//         // Clear the interval on component unmount
//         return () => {
//             clearInterval(intervalId);
//         }
//     }, [redirect_uri]);
//
//
//
//     return (
//             <Routes>
//                 {token ? (
//                     <>
//                         <Route path="/" element={<Navigate to="/main" />} />
//                         <Route path="/main" element={
//                             <BaseLayout>
//                                 <TopTrack />
//                                 {/*<UserPlaylists accessToken={localStorage.getItem("accessToken")} deviceId={localStorage.getItem("deviceId")}/>*/}
//                                {/*<Playlist accessToken={localStorage.getItem("accessToken")} deviceId={localStorage.getItem("deviceId")}/>*/}
//                             </BaseLayout>
//                         } />
//                         {/*<Route path="/topTracks" element={<ButtonTopTrack />} />*/}
//                     </>
//                 ) : (
//                     <Route path="/" element={<Login />} />
//                 )}
//             </Routes>
//     );
// }

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
                            </>
                        }/>
                        <Route path="topTrack" element={<TopTrack />} />
                        <Route path="user-playlists" element={<UserPlaylists />} />

                </Route>
                {/* Additional routes can be added here if necessary */}
            </Routes>
        </AuthProvider>
    );
}


export default App;
