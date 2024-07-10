import React from "react";
import playlist from "./playlist_sample";
import "./PlaylistCard.css";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const PlaylistCard = () => {
  const formatDuration = (durationInMs) => {
    const minutes = Math.floor(durationInMs / 60000);
    const seconds = ((durationInMs % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="playlist">
      <Stack direction="row" spacing={2} className="playlist-card">
        <div className="playlist-img">
          <img
            src={playlist.data.playlistInfo.images[0].url}
            alt="Playlist-Img"
            id="playlist-image"
          />
        </div>
        <div className="playlist-name">
        <h1>My Playlist: {playlist.data.playlistInfo.name}</h1>
        </div>
      </Stack>
      <Divider sx={{ bgcolor: "white" }} />
      <div className="song-list">
        {playlist.data.playlistInfo.trackList.map((track) => (
          <div key={track.id} className="song">
            <Stack direction="row" spacing={2} className="song-card">
            <img src={track.images[0].url} alt={track.name} className="img"/>
            <div className="song-infor">
              <h3>{track.name}</h3>
              <p>{track.artists.join(", ")}</p>
            </div>
            <div className="song-duration">
            <p>{formatDuration(track.duration)}</p>
            </div>
          </Stack>
          <Divider sx={{ bgcolor: "gray" }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistCard;
