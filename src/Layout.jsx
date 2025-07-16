// src/Layout.jsx
import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  const channels = ["general", "memes", "support"];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "Arial" }}>
      <div style={{ width: "200px", backgroundColor: "#2f3136", color: "white", padding: "10px" }}>
        <h3>Channels</h3>
        {channels.map((channel) => (
          <div key={channel}>
            <Link
              to={`/channel/${channel}`}
              style={{ color: "white", textDecoration: "none", display: "block", padding: "5px 0" }}
            >
              #{channel}
            </Link>
          </div>
        ))}
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <div style={{ backgroundColor: "#202225", color: "white", padding: "10px" }}>
          <h2>Welcome to Chora Chat!</h2>
        </div>
        <div style={{ flex: 1, padding: "10px", backgroundColor: "#f2f3f5" }}>
          <Outlet />
        </div>
      </div>

      <div style={{ width: "200px", backgroundColor: "#2f3136", color: "white", padding: "10px" }}>
        <h3>Online</h3>
        <p>Franta</p>
        <p>Petr</p>
      </div>
    </div>
  );
}
