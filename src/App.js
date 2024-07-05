
import "./App.css";
import {useEffect, useState} from "react";
import {getToken, refreshAccessToken} from "./Config/Auth";
import WebPlayback from "./components/SDK_WebPlayer/WebPlayback";
import Login from "./components/SDK_WebPlayer/Login";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Callback from "./components/Callback";
import HomeTest from "./components/Home";
import GoogleLogin from "./components/googleLogin";
import { Navbar } from "./components/Navbar/Navbar";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { CurrentSong } from "./pages/CurrentSong/CurrentSong";

;

function App() {
  return (
      <Router >
          <Routes>
              <Route path="/google-login" element={<GoogleLogin />} />
              <Route path="/" element={<Callback />} />
              <Route path="/home" element={<HomeTest />} />
          </Routes>
      </Router>
    // <div className="App" id="app">
    //
    //     <Navbar />
    //     <Sidebar />
    //     <CurrentSong />
    // </div>
  );
}


// function App() {
//     const [token, setToken] = useState('');
//     const redirect_uri = '/auth/token';
//
//     useEffect(() => {
//         const fetchToken = async () => {
//             const storedToken = localStorage.getItem('accessToken');
//             if (storedToken) {
//                 setToken(storedToken);
//             } else {
//                 const newToken = await getToken(redirect_uri);
//                 setToken(newToken);
//             }
//         };
//         fetchToken();
//
//         const intervalId = setInterval(async () => {
//             const newRefreshToken = await refreshAccessToken();
//             setToken(newRefreshToken)
//         }, 900000);   //15minutes
//
//         // Clear the interval on component unmount
//         return () => clearInterval(intervalId);
//     }, [redirect_uri]);
//
//
//
//     return (
//         <Router>
//             <Routes>
//                 {token ? (
//                     <>
//                         <Route path="/" element={<Navigate to="/playback" />} />
//                         <Route path="/playback" element={<WebPlayback />} />
//                         {/* <Route path="/home" element={<HomeTest />} /> */}
//                     </>
//                 ) : (
//                     <Route path="/" element={<Login />} />
//                 )}
//             </Routes>
//         </Router>
//     );
// }

export default App;
