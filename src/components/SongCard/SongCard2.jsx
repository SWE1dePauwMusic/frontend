import React from 'react';
import { reqPlayTrackWithId } from "../../Services/playTrack";
import { getTokenHandler } from "../../utils/tokenHandling";
import './SongCard.css';
import "../../assets/songs.jpeg"

// Helper function to format duration from milliseconds to mm:ss
const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = ((duration % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const SongCard = ({ index, track}) => {
    return (
        <div className="track" key={track.id}>
            <span className="track-number">{index + 1}</span>
            <img src={track.image?.url || "../../assets/songs.jpeg"} alt={track.name} className="track-image" />
            <div className="track-info">
                <span className="track-name">{track.name}</span>
                <span className="track-artists">{track.artists.map(artist => artist.name).join(', ')}</span>
            </div>
            <span className="track-duration">{formatDuration(track.duration)}</span>
        </div>
    );
};

export default SongCard;
