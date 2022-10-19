import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Red Network</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">0</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">0</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
