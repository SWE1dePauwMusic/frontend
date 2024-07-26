import React from 'react';
import userData from '../../mockData/userPlaylists.json';
import {getTokenHandler} from "../../utils/tokenHandling";
import {Link, useNavigate} from "react-router-dom"; // Adjust the path as needed
import './ListPlaylist.css';
import {reqPlayPlaylistWithId} from "../../Services/playTrack";

const UserPlaylists = ({ playlists = userData.data.userPlaylists}) => {
    const navigate = useNavigate();

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
                            <button className="playButton" onClick={() => reqPlayPlaylistWithId(getTokenHandler("accessToken"), localStorage.getItem("deviceId"),playlist.id)}>Play</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};


export default UserPlaylists;
