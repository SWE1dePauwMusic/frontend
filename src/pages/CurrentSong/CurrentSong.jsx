import React from "react";
import { SongCard } from "../../components/Card/SongCard/SongCard";
import "./CurrentSong.css"
import more from "../../assets/more.png"


export const CurrentSong = () => {
  
  return (
    <div className="current-song">
      <div className="song-card">
        <SongCard />
      </div>
      <div className="song-rec">
      
      <img className="icon" src={more} alt="More"></img>
        <h3>Recommend Song</h3>
      </div>
    </div>
  );
};
