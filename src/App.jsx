// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Chat from "./Chat";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/channel/general" />} />
          <Route path="/channel/:channelId" element={<Chat />} />
        </Route>
      </Routes>
    </Router>
  );
}
