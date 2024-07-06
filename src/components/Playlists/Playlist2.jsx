// Playlist.js
import React from 'react';
import playlistData from '../../mockData/playlist_sample.json';
// Helper function to format duration from milliseconds to mm:ss
const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const Playlist = ({ accessToken, deviceId }) => {
    const playlist = playlistData.data.playlistInfo;
    console.log(playlist, accessToken, deviceId)
    const playTrack = (trackUri) => {
        fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uris: ['spotify:track:'+ trackUri],
            }),
        }).catch(error => console.error('Error playing track:', error));
    };

    return (
        <div style={styles.playlist}>
            <div style={styles.header}>
                <img src={playlist.images[0].url} alt={playlist.name} style={styles.playlistImage} />
                <div>
                    <h1 style={styles.playlistName}>{playlist.name}</h1>
                    <p style={styles.playlistLength}>Tracks: {playlist.length}</p>
                </div>
            </div>
            <div style={styles.tracks}>
                {playlist.trackList.map((track, index) => (
                    <div key={track.id} style={styles.track}>
                        <span style={styles.trackNumber}>{index + 1}</span>
                        <img src={track.images[2].url} alt={track.name} style={styles.trackImage} />
                        <div style={styles.trackInfo}>
                            <span style={styles.trackName}>{track.name}</span>
                            <span style={styles.trackArtists}>{track.artists.join(', ')}</span>
                        </div>
                        <span style={styles.trackDuration}>{formatDuration(track.duration)}</span>
                        <button style={styles.playButton} onClick={() => playTrack(track.id)}>Play</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    playlist: {
        margin: '20px auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        maxWidth: '800px',
        backgroundColor: '#fff',
        color: '#000',
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        paddingBottom: '20px',
        borderBottom: '1px solid #ddd',
    },
    playlistImage: {
        width: '150px',
        height: '150px',
        borderRadius: '8px',
        marginRight: '20px',
    },
    playlistName: {
        fontSize: '24px',
        margin: '0',
        color: '#333',
    },
    playlistLength: {
        fontSize: '16px',
        marginTop: '8px',
        color: '#777',
    },
    tracks: {
        marginTop: '20px',
    },
    track: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 0',
        borderBottom: '1px solid #ddd',
    },
    trackNumber: {
        width: '20px',
        textAlign: 'center',
        marginRight: '10px',
    },
    trackImage: {
        width: '50px',
        height: '50px',
        borderRadius: '4px',
        marginRight: '10px',
    },
    trackInfo: {
        flex: 1,
    },
    trackName: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#333',
        marginRight: '4px',
    },
    trackArtists: {
        fontSize: '14px',
        color: '#555',
    },
    trackDuration: {
        fontSize: '14px',
        color: '#999',
    },
    playButton: {
        marginLeft: '10px',
        padding: '5px 10px',
        fontSize: '14px',
        cursor: 'pointer',
    },
};

export default Playlist;
