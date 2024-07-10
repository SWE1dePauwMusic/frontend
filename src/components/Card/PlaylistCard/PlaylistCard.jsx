import React from "react";
//import { useState, useEffect } from "react";
import playlist from "./playlist_sample";
import "./PlaylistCard.css";

import Divider from "@mui/material/Divider";

const PlaylistCard = () => {

  const formatDuration = (durationInMs) => {
    const minutes = Math.floor(durationInMs / 60000);
    const seconds = ((durationInMs % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

 

  return (
    <div className="playlist-card">
      <h1>My Playlist: {playlist.data.playlistInfo.name}</h1>
      <div className="playlist-img">
      <img src={playlist.data.playlistInfo.images[0].url} alt="Playlist-Img"/>
      </div>
      <Divider sx={{ bgcolor: "white" }} />
      <div className="song-list">
      {playlist.data.playlistInfo.trackList.map(track => (
          <div key={track.id} className="song">
            <img src={track.images[0].url} alt={track.name} />
            <div className="song-infor">
              <p>{track.name}</p>
              <p>{track.artists.join(', ')}</p>
              <p>{formatDuration(track.duration)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistCard;
