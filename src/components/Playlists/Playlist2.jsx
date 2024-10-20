import React from 'react';
import playlistData from '../../mockData/playlist_sample.json';
import SongCard from "../SongCard/SongCard2";
import {reqPlayPlaylistWithId, reqPlayTrackWithId} from "../../Services/playTrack";
import { getTokenHandler } from "../../utils/tokenHandling";
import './Playlist.css';

const Playlist = ({ playlistResponse, playlistId, removeTrack }) => {
    console.log("Playlist", playlistResponse)
    const playlist = playlistResponse.data.playlistInfo;
    const trackLists = playlist.trackList.filter(item => item.spotifyId !== null)
    const listId = trackLists.map((item) => item.spotifyId);

    function shuffleArray(array) {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex !== 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }



    return (
        <div className="playlist-container" key={playlistId}>
            <div className="playlist-header">
                {playlist.image && (
                    <img src={playlist.image.url} alt={playlist.name} className="playlist-image" />
                )}
                <div>
                    <h1 className="playlist-name">{playlist.name}</h1>
                    {playlist.description && (
                        <p className="playlist-description">{playlist.description}</p>
                    )}
                    <button className="playlist-play-button" onClick={() => reqPlayPlaylistWithId(getTokenHandler('accessToken'), localStorage.getItem('deviceId'), playlist.spotifyId)}>
                        Play
                    </button>
                </div>
            </div>
            <div className="playlist-tracks">
                {trackLists.map((track, index) => (
                    <div className="track-container">
                        <SongCard track={track} index={index} removeTrack={removeTrack} playlistId={playlistId} />
                        <button className="playlist-play-button" onClick={() =>
                            reqPlayTrackWithId(getTokenHandler("accessToken"), localStorage.getItem('deviceId'), track.spotifyId, shuffleArray(listId))

                        }>Play</button>

                    </div>
            ))}
            </div>
        </div>
    );
};

export default Playlist;
