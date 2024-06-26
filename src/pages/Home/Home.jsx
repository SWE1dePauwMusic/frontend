import React from 'react'
import { Fragment } from "react";
import './Home.css';
import song from '../../assets/songs.jpeg';
import Playlist from "../../components/Playlists/Playlist"

const playlists = [
    {_id: 1, img: song, name:"Inside Out 2 Song", desc:"Joy"},
];
export const Home = () => {
  return (
    <Fragment>
        <div className='home'>
            <h1>welcome, User</h1>
            <div className='playlist'>
                
            </div>
            <h1>Hits</h1>
            <div className='playlist'>

            </div>
        </div>
    </Fragment>
  )
}
