
import "./App.css";
import {useEffect, useState} from "react";
import {getToken, refreshAccessToken} from "./Config/Auth";
import Login from "./components/SDK_WebPlayer/Login";
import { Route, Routes, Navigate } from 'react-router-dom';

import { CurrentSong } from "./pages/CurrentSong/CurrentSong";
import BaseLayout from "./components/BaseLayOut/baseLayout";
import Playlist from "./components/Playlists/Playlist2";
import UserPlaylists from "./components/Playlists/ListPlaylist";
import SongCard2 from "./components/Card/SongCard/SongCard2";
import {ButtonTopTrack, TopTrack} from "./pages/TopTrack-Recommendation/ToptrackRec";


// function App() {
//   return (
      // <Router >
      //     <Routes>
      //         <Route path="/google-login" element={<GoogleLogin />} />
      //         <Route path="/" element={<Callback />} />
      //         <Route path="/home" element={<HomeTest />} />
      //     </Routes>
      // </Router>
    // <div className="App" id="app">
    //
    //     <Navbar />
    //     <Sidebar />
    //     <CurrentSong />
    // </div>
//   );
// }


function App() {
    const [token, setToken] = useState('');
    const redirect_uri = '/auth/token';

    useEffect(() => {
        const fetchToken = async () => {
            const storedToken = localStorage.getItem('accessToken');
            if (storedToken) {
                setToken(storedToken);
            } else {
                const newToken = await getToken(redirect_uri);
                setToken(newToken);
            }
        };
        fetchToken();

        const intervalId = setInterval(async () => {
            const newRefreshToken = await refreshAccessToken();
            setToken(newRefreshToken)
        }, 900000);   //15minutes

        // Clear the interval on component unmount
        return () => {
            clearInterval(intervalId);
            localStorage.clear();
        }
    }, [redirect_uri]);



    return (
            <Routes>
                {token ? (
                    <>
                        <Route path="/" element={<Navigate to="/main" />} />
                        <Route path="/main" element={
                            <BaseLayout>
                                <TopTrack />
                                {/*<UserPlaylists accessToken={localStorage.getItem("accessToken")} deviceId={localStorage.getItem("deviceId")}/>*/}
                               {/*<Playlist accessToken={localStorage.getItem("accessToken")} deviceId={localStorage.getItem("deviceId")}/>*/}
                            </BaseLayout>
                        } />
                        {/*<Route path="/topTracks" element={<ButtonTopTrack />} />*/}
                    </>
                ) : (
                    <Route path="/" element={<Login />} />
                )}
            </Routes>
    );
}

export default App;
