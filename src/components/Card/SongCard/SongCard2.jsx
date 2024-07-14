// SongCard.js
import React from 'react';
import {reqPlayTrackWithId} from "../../../Services/playTrack";
import {getTokenHandler} from "../../../utils/tokenHandling";

// Helper function to format duration from milliseconds to mm:ss
const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};


const SongCard = ({index, track}) => {
    return (
        <div key={track.id} style={styles.track}>
            <span style={styles.trackNumber}>{index + 1}</span>
            <img src={track.images[2].url} alt={track.name} style={styles.trackImage}/>
            <div style={styles.trackInfo}>
                <span style={styles.trackName}>{track.name}</span>
                <span style={styles.trackArtists}>{track.artists.map(artist => artist.name).join(', ')}</span>
            </div>
            <span style={styles.trackDuration}>{formatDuration(track.duration)}</span>
            <button style={styles.playButton} onClick={() => reqPlayTrackWithId(getTokenHandler("accessToken"), localStorage.getItem('deviceId'), [track.id])}>Play</button>
        </div>
    );
};

const styles = {
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
}

export default SongCard;
