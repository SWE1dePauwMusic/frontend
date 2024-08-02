import React, {useEffect, useState} from 'react';
import userData from '../../mockData/userPlaylists.json';
import {getTokenHandler} from "../../utils/tokenHandling";
import {Link, useNavigate} from "react-router-dom"; // Adjust the path as needed
import './ListPlaylist.css';
import {reqPlayPlaylistWithId} from "../../Services/playTrack";
import makeRequest from "../../utils/request";

const UserPlaylists = () => {
    const [playlists, setPlaylists] = useState([])
    const navigate = useNavigate();

    useEffect(()=> {
        const fetchUserPlaylist = async () => {
            try {
                const accessToken = getTokenHandler("accessToken");
                const options = {
                    method: "GET",
                    url: `/user-playlists`,
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json",
                    },
                };
                const responseData = await makeRequest(options);
                console.log(responseData)
                if (!responseData.success) {
                    console.log("ErrorCode:", responseData.status, "ErrorMessage:", responseData.error);
                    return;
                }
                setPlaylists(responseData.data.userPlaylists);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserPlaylist();
    }, []);

    if (!playlists) {
        return <div>Loading...</div>;
    }
    return (
        <>
            <button className="backButton" onClick={() => navigate('/main')}>Back</button>
            <div className="playlists">
                {playlists.map((playlist) => (
                    <div key={playlist.id} className="playlist">
                        {playlist.image && playlist.image.url && (
                            <img
                                src={playlist.image.url}
                                alt={playlist.name}
                                className="playlistImage"
                                style={{ width: '170px', height: '170px' }}
                            />
                        )}
                        <div className="playlistInfo">
                            <h2 className="playlistName">
                                <Link to={`/main/playlist/${playlist.spotifyId}`} className="playlistName">
                                    {playlist.name}
                                </Link>
                            </h2>
                            <h4 className="playlistOwner">Owner:
                                <Link to={`/main/user/${playlist.owner.spotifyId}`} className="playlistOwner">
                                    { playlist.owner.display_name}
                                </Link>
                            </h4>
                            <button className="playButton"
                                    onClick={() => reqPlayPlaylistWithId(getTokenHandler("accessToken"), localStorage.getItem("deviceId"), playlist.id)}>Play
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};


export default UserPlaylists;
