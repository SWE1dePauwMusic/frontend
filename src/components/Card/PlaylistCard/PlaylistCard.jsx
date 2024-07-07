import React from "react";
//import { useState, useEffect } from "react";
import playlists from "./playlist";
//import Stack from "@mui/material/Stack";
// import "./PlaylistCard.css";


const PlaylistCard = () => {
  // const [trackData, setTrackData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log(playlists)
  //       if (!playlists) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const data = playlists;
  //       setTrackData(data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // if (!trackData) {
  //   return <div>Loading...</div>;
  // }

  // const { songName, artists, popularity, duration, imageUrl } = trackData;

  // const formatDuration = (durationInMs) => {
  //   const minutes = Math.floor(durationInMs / 60000);
  //   const seconds = ((durationInMs % 60000) / 1000).toFixed(0);
  //   return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  // };



  const playlist = [
    {
        songName: "Shape of You",
        popularity: 109087889,
        songId: 1,
        artists: ["Ed Sheeran"],
        imageUrl: "",
        duration: "260174"
    },
    {
        songName: "Someone Like You",
        popularity: 87596479,
        songId: 2,
        artists: ["Adele"],
        imageUrl: "",
        duration: "267986"
    },
    {
        songName: "Uptown Funk",
        popularity: 68895359,
        songId: 3,
        artists: ["Mark Ronson", "Bruno Mars"],
        imageUrl: "",
        duration: "289186"
    },
    {
        songName: "Despacito",
        popularity: 789037680,
        songId: 4,
        artists: ["Luis Fonsi", "Daddy Yankee"],
        imageUrl: "",
        duration: "360286"
    },
    {
        songName: "Rolling in the Deep",
        popularity: 8976367,
        songId: 5,
        artists: ["Adele"],
        imageUrl: "",
        duration: "290186"
    },
    {
        songName: "Rolling in the Deep",
        popularity: 8976367,
        songId: 5,
        artists: ["Adele"],
        imageUrl: "",
        duration: "290186"
    },
    {
        songName: "Havana",
        popularity: 843256798,
        songId: 7,
        artists: ["Camila Cabello"],
        imageUrl: "",
        duration: "280186"
    },
    {
        songName: "Perfect",
        popularity: 8098796789,
        songId: 8,
        artists: ["Ed Sheeran"],
        imageUrl: "",
        duration: "263386"
    },
    {
        songName: "Stressed Out",
        popularity: 6454237888,
        songId: 9,
        artists: ["Twenty One Pilots"],
        imageUrl: "",
        duration: "260479"
    },
    {
        songName: "Happier",
        popularity: 777975467,
        songId: 10,
        artists: ["Marshmello", "Bastille"],
        imageUrl: "",
        duration: "263786"
    }
];

  return (
    <div className="playlist-card">
      <h1>My Playlist</h1>
      <div className="song-list">
        {playlist.map(song => (
          <PlaylistSongcard key ={song.songId}  song={song}/>
        ))}
      </div>
    </div>
  );
};

const PlaylistSongcard = ({song}) =>{
  return (
    <div className="song-card">
      <img src={`${song.imageUrl}`} alt="Playlist" />
      <div className="song-desc">
        <h4>{song.songName}</h4>
        <p>{song.artists} {song.duration}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;

