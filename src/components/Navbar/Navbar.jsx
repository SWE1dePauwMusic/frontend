import { useState } from "react";
import { Link } from "react-router-dom";
import { ClickAwayListener } from "@mui/material";
import {Box} from "@mui/material"
import down from "../../assets/down.png";
import up from "../../assets/up.png";
import arrowBack from "../../assets/arrowBack.png";
import arrowForward from "../../assets/arrowForward.png";
import profile from "../../assets/profile.png";
import setting from "../../assets/setting.png";
import logout from "../../assets/logout.png";
import "./Navbar.css";
//import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  //const history = useHistory(); //Ignore for right now until have Router
  //useHistory() is used for the click back and forward

  return (
    <div className="app-navbar">
      <div className="left">
        <div className="click" onClick={() => {}}>
          <img className="icon-click" src={arrowBack} alt="Back"></img>
        </div>
        <div className="click" onClick={() => {}}>
          <img className="icon-click" src={arrowForward} alt="Forward"></img>
        </div>
      </div>

      <div className="right">
        <div className="profile-menu" onClick={() => setMenu(!menu)}>
          <img className="icon" src={profile} alt="Profile"></img>
          <p>MHH</p>
          {menu ? (
            <img className="icon" src={up} alt="Up" />
          ) : (
            <img className="icon" src={down} alt="Down" />
          )}
        </div>
      </div>
      {menu && (
        
        <ClickAwayListener onClickAway={() => setMenu(false)}>
          <div className="menu" onClick={() => setMenu(false)}>
          <Box className="box">
            <Link to="/#profile">
              <div className="options">
                <img className="icon" src={profile} alt="Profile"></img>
                <p>Profile</p>
              </div>
            </Link>
            <div className="options">
              <img className="icon" src={setting} alt="Settings"></img>
              <p>Settings</p>
            </div>
            <div className="options">
              <img className="icon" src={logout} alt="Log Out"></img>
              <p>Log Out</p>
            </div>
            </Box>
          </div>
        </ClickAwayListener>
     
      )}
    </div>
  );
};
