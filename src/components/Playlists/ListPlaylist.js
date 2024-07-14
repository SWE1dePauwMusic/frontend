import React from 'react';
import userData from '../../mockData/userPlaylists.json';
import {getTokenHandler} from "../../utils/tokenHandling";
import {useNavigate} from "react-router-dom"; // Adjust the path as needed

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
            <button onClick={() => navigate('/main')}>Back</button>
            <div style={styles.playlists}>
                {playlists.map((playlist, index) => (
                    <div key={playlist.id} style={styles.playlist}>
                        {playlist.images && playlist.images[0] && (
                            <img src={playlist.images[0].url} alt={playlist.name} style={styles.playlistImage}/>
                        )}
                        <div style={styles.playlistInfo}>
                            <h2 style={styles.playlistName}>{playlist.name}</h2>
                            <p style={styles.trackNumber}>Tracks: {playlist.trackNumber}</p>
                            <button style={styles.playButton} onClick={() => playPlaylist(playlist.id)}>Play</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
            );
            };

            const styles = {
            playlists: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: '20px auto',
            maxWidth: '1200px',
        },
            playlist: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '20px',
            padding: '20px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '250px',
            backgroundColor: '#fff',
            color: '#000',
        },
            playlistImage: {
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            marginBottom: '10px',
        },
            playlistInfo: {
            textAlign: 'center',
        },
            playlistName: {
            fontSize: '18px',
            margin: '10px 0',
            color: '#333',
        },
            trackNumber: {
            fontSize: '14px',
            marginBottom: '10px',
            color: '#777',
        },
            playButton: {
            padding: '10px 20px',
            fontSize: '14px',
            cursor: 'pointer',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#1DB954',
            color: '#fff',
        },
        };

            export default UserPlaylists;
