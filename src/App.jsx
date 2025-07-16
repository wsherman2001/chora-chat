// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";
import Chat from "./Chat";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/general" />} />
        <Route path="/:channelName" element={<Layout />}>
          <Route index element={<Chat />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
