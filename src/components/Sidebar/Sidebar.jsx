import React from "react";
import home from "../../assets/home.png";
import search from "../../assets/search.png";
import library from "../../assets/library.png";
import create from "../../assets/create.png";
import podcast from "../../assets/podcast.png";
//import more from "../../assets/more.png";
import arrowRight from "../../assets/arrowRight.png";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="app-sidebar">
      {/* <img className='logo' src='' alt='logo'></img> */}
      <div className="space"></div>
      <div className="first-com">
        <NavLink to="#home" className="menu-link">
          <img className="icon" src={home} alt="Home"></img>
          <span>Home</span>
        </NavLink>
        <NavLink to="#search" className="menu-link">
          <img className="icon" src={search} alt="Search"></img>
          <span>Search</span>
        </NavLink>
      </div>
      <div className="space"></div>
      <div className="second-com">
        <NavLink to="#library" className="menu-link">
          <img className="icon" src={library} alt="Library"></img>
          <span>Your Library</span>
          <img className="icon-arrow" src={arrowRight} alt="Arrorw Right" />
        </NavLink>
        <div className="third-com">
          <NavLink to="#createPlaylist" className="menu-link">
            <img className="icon" src={create} alt="Create Playlist"></img>
            <h4>Create Your First Playlist</h4>
          </NavLink>
          <p>Let's create your favourite lists</p>
        </div>
        <div className="third-com">
          <NavLink to="#podcast" className="menu-link">
            <img className="icon" src={podcast} alt="Browser Podcast"></img>
            <h4>Let listen to some podcasts</h4>
          </NavLink>
          <p>Follow and get updated on new podcasts</p>
        </div>
        {/* <div className="third-com">
          <NavLink to="#more" className="menu-link">
            <img className="icon" src={more} alt="More"></img>
            <h4>Find out More</h4>
          </NavLink>
          <p>Having questions or need supprt ?</p>
        </div> */}
      </div>
    </div>
  );
};
