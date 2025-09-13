import React, { useState } from "react";
import Netflix_Logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="outer_div_container">
      <div className="first_div">
        {/* Logo + Nav */}
        <div className="header_center">
          <img src={Netflix_Logo} alt="Netflix_Logo" className="netflix_logo" />
          <ul className={`nav_links ${isOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Language</li>
          </ul>
        </div>

        {/* Right icons */}
        <div className="header_right">
          <ul className="nav_links">
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsIcon />
            </li>
            <li>
              <AssignmentIndIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>

          {/* Hamburger menu */}
          <button className="menu_btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
