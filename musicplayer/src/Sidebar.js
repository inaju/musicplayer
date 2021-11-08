import React from "react";
import Account from "./Account";
import "./Sidebar.css";
import Tab from "./Tab";
import HomeIcon from "@mui/icons-material/Home";
import WebIcon from "@mui/icons-material/Web";
import AlbumIcon from "@mui/icons-material/Album";
import PersonIcon from "@mui/icons-material/Person";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import UploadFileIcon from "@mui/icons-material/UploadFile";

function Sidebar() {
  return (
    <div className="sidebar">
      <Account />
      <Tab Icon={HomeIcon} name="Home" color="disabled" />
      <Tab Icon={WebIcon} name="Browse" color="disabled" />
      <Tab Icon={AlbumIcon} name="Album" color="disabled" />
      <Tab Icon={PersonIcon} name="Artist" color="disabled" />
      <Tab Icon={OndemandVideoIcon} name="Videos" color="disabled" />

      <div className="lower-div">
        <p>MY MUSIC</p>
        <Tab Icon={AccessAlarmIcon} name="Recently Played" color="disabled" />
        <Tab Icon={UploadFileIcon} name="Local Files" color="disabled" />
      </div>
    </div>
  );
}

export default Sidebar;
