import React from "react";
import Netflix_Logo from "../../assets/images/logo.png"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./Header.css"

const Headder = () => {
  return (
    <>
      <div className="outer_div_container">
        <div className="first_div">
          <div className="header_center">
            <img
              src={Netflix_Logo}
              alt="Netflix_Logo"
              className="netflix_logo"
            />
            <ul className="nav_links">
              <li>Home</li>
              <li>Tv Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browse by LAnguge</li>
            </ul>
          </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Headder;
