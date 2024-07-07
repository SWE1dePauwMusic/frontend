// Playlist.js
import React from 'react';
import playlistData from '../../mockData/playlist_sample.json';
import SongCard from "../Card/SongCard/SongCard2";
// Helper function to format duration from milliseconds to mm:ss
const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const Playlist = ({ accessToken, deviceId }) => {
    const playlist = playlistData.data.playlistInfo;
    console.log(playlist, accessToken, deviceId)

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
                    <SongCard track={track} index={index}/>
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
};

export default Playlist;
