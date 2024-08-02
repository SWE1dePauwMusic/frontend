import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { FaMicrophone, FaBookmark, FaMusic, FaClock, FaHeadphonesAlt, FaHeart, FaTwitch } from "react-icons/fa";
import {useNavigate} from "react-router-dom";
// import "./index.css"

const SidebarContainer = () => {
    const navigate = useNavigate();

    return (
        <div className="sidebar-container">
            <Sidebar width="250px">
                <Menu
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            if (level === 0)
                                return {
                                    color: disabled ? "#2B2B2B" : "#2B2B2B", /* Softer dark grey */
                                    backgroundColor: active ? "#DAE2F8" : "#FFFFFF", /* Light pastel blue for active, white otherwise */
                                    borderRadius: "10px", /* Rounded corners */
                                    margin: "10px 20px", /* Margin for spacing */
                                    padding: "15px 20px", /* Padding for spacing */
                                    display: "flex",
                                    alignItems: "center",
                                    transition: "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
                                    boxShadow: active ? "0 4px 8px rgba(0, 0, 0, 0.1)" : "none", /* Subtle shadow effect for active */
                                };
                        },
                    }}
                >
                    <SubMenu defaultOpen={true} label="Explore">
                        <MenuItem className="menu-item"><FaMicrophone className="sidebar-icon"/> Artists </MenuItem>
                        <MenuItem className="menu-item"><FaBookmark className="sidebar-icon"/> Albums </MenuItem>
                        <MenuItem className="menu-item"><FaMusic className="sidebar-icon"/>Genres </MenuItem>
                    </SubMenu>
                    <SubMenu defaultOpen={true} label="My Library">
                        <MenuItem className="menu-item"><FaClock className="sidebar-icon"/> Recent </MenuItem>
                        <MenuItem className="menu-item" onClick={() =>
                            navigate('./user-playlists')}><FaHeadphonesAlt className="sidebar-icon"/> My Playlists </MenuItem>
                        <MenuItem className="menu-item" onClick={() =>
                        navigate('./topTrack')}><FaHeart className="sidebar-icon"/>Recent Top Tracks</MenuItem>

                    </SubMenu>
                    <SubMenu defaultOpen={true} label="My Chatbot">
                        <MenuItem className="menu-item"><FaTwitch className="sidebar-icon"/>Chat</MenuItem>
                    </SubMenu>

                </Menu>
            </Sidebar>
        </div>
    );
};

export default SidebarContainer;
