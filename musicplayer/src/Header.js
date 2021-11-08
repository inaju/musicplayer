import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";

function Header() {
  return (
    <div className="header">
      <div className="search">
        <SearchIcon className="searchIcon" />

        <input
          className="input"
          type="input"
          placeholder="Search for songs, artists, etc"
        />
      </div>

      <div className="utilities">
        <NotificationsNoneIcon />
        <SettingsIcon />
        <input type="button" value="Upgrade Plan" />
      </div>
    </div>
  );
}

export default Header;
