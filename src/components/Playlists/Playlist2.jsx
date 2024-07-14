// Playlist.js
import React from 'react';
import playlistData from '../../mockData/playlist_sample.json';
import SongCard from "../Card/SongCard/SongCard2";
import {reqPlayTrackWithId} from "../../Services/playTrack";
import {getTokenHandler} from "../../utils/tokenHandling";
// Helper function to format duration from milliseconds to mm:ss


const Playlist = ({ playlistResponse }) => {
    const playlist = playlistResponse.data.playlistInfo;
    const listId = playlist.trackList.map((item) => item.id);

    return (
        <div style={styles.playlist}>
            <div style={styles.header}>
                {/*<img src={playlist.images[0].url} alt={playlist.name} style={styles.playlistImage} />*/}
                <div>
                    <h1 style={styles.playlistName}>{playlist.name}</h1>
                    <button onClick={()=>reqPlayTrackWithId(getTokenHandler('accessToken'), localStorage.getItem('deviceId'), listId)}>
                        Play
                    </button>
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
