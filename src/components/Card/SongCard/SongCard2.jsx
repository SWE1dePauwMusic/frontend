// SongCard.js
import React from 'react';

// Helper function to format duration from milliseconds to mm:ss
const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const SongCard = ({ song }) => {
    return (
        <div style={styles.card}>
            <img src={song.images[0].url} alt={song.name} style={styles.image} />
            <div style={styles.info}>
                <h2 style={styles.title}>{song.name}</h2>
                <p style={styles.artists}>{song.artists.join(', ')}</p>
                <p style={styles.popularity}>Popularity: {song.popularity}</p>
                <p style={styles.duration}>Duration: {formatDuration(song.duration)}</p>
            </div>
        </div>
    );
};

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '600px',
    },
    image: {
        borderRadius: '8px',
        width: '150px',
        height: '150px',
        objectFit: 'cover',
    },
    info: {
        marginLeft: '16px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    title: {
        margin: '0 0 8px 0',
        fontSize: '24px',
    },
    artists: {
        margin: '0 0 4px 0',
        fontSize: '16px',
        color: '#666',
    },
    popularity: {
        margin: '0 0 4px 0',
        fontSize: '14px',
        color: '#888',
    },
    duration: {
        margin: '0',
        fontSize: '14px',
        color: '#888',
    },
};

export default SongCard;
