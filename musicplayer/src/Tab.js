import React from "react";
import "./Tab.css";
import HomeIcon from "@mui/icons-material/Home";

function Tab({ Icon, name, color }) {
  return (
    <div className="tab">
      <Icon color={color} />
      <p>{name}</p>
    </div>
  );
}

export default Tab;
