import React, { useEffect, useState } from 'react';
import PlaylistCard from "../../components/Card/PlaylistCard/PlaylistCard";
import playlist_sample from '../../components/Card/PlaylistCard/playlist_sample';
import "./Playlist.css"
const Playlist = () =>{
    const[playlist, setPlaylist] = useState(null);
    useEffect(() => {

        const fetchPlaylist = async () => {
          try {
            const data = playlist_sample;
            setPlaylist(data);
          } catch (error) {
            console.error('Error fetching playlist:', error);
          }
        };
    
        fetchPlaylist();
      }, []);
    
      return (
        <div className="playlist-page">
          {playlist ? <PlaylistCard playlist={playlist} /> : <p>Loading...</p>}
        </div>
      );
}

export default Playlist;