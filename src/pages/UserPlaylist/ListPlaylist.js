import React from 'react';
import userData from '../../mockData/userPlaylists.json';
import {getTokenHandler} from "../../utils/tokenHandling";
import {Link, useNavigate} from "react-router-dom"; // Adjust the path as needed
import './ListPlaylist.css';

const UserPlaylists = ({ playlists = userData.data.userPlaylists}) => {
    const navigate = useNavigate();
    const playPlaylist = (playlistUri) => {
        const accessToken = getTokenHandler("accessToken");
        const deviceId = localStorage.getItem("deviceId");
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                context_uri: `spotify:playlist:${playlistUri}`,
            }),
        }).catch(error => console.error('Error playing playlist:', error));
    };

    return (
        <>
            <button className="backButton" onClick={() => navigate('/main')}>Back</button>
            <div className="playlists">
                {playlists.map((playlist) => (
                    <div key={playlist.id} className="playlist">
                        {playlist.images && playlist.images[0] && (
                            <img src={playlist.images[0].url} alt={playlist.name} className="playlistImage"/>
                        )}
                        <div className="playlistInfo">
                            <h2 className="playlistName">
                                <Link to={`/main/playlist/${playlist.id}`} className="playlistName">
                                    {playlist.name}
                                </Link>
                            </h2>
                            <p className="trackNumber">Tracks: {playlist.trackNumber}</p>
                            <button className="playButton" onClick={() => playPlaylist(playlist.id)}>Play</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};


export default UserPlaylists;
