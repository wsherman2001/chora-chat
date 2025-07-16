// src/Layout.jsx
import React, { useState } from "react";

const Layout = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim() === "") return;
    setMessages((prev) => [...prev, inputValue.trim()]);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Left panel: Channels */}
      <aside
        style={{
          width: "200px",
          backgroundColor: "#2f3136",
          color: "white",
          padding: "10px",
        }}
      >
        <h3>Channels</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li># general</li>
          <li># memes</li>
          <li># tech</li>
        </ul>
      </aside>

      {/* Main content */}
      <main style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <header
          style={{
            backgroundColor: "#202225",
            color: "white",
            padding: "10px",
          }}
        >
          <h1>Chora Chat</h1>
        </header>

        {/* Chat messages */}
        <section
          style={{
            flexGrow: 1,
            backgroundColor: "#36393f",
            color: "white",
            padding: "10px",
            overflowY: "auto",
          }}
        >
          {messages.map((msg, index) => (
            <div key={index} style={{ marginBottom: "6px" }}>
              <span style={{ color: "#00b0f4" }}>You:</span> {msg}
            </div>
          ))}
        </section>

        {/* Message input */}
        <footer
          style={{
            padding: "10px",
            backgroundColor: "#40444b",
          }}
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "none",
              outline: "none",
            }}
          />
          <button
            onClick={handleSend}
            style={{
              marginTop: "8px",
              padding: "8px 16px",
              backgroundColor: "#7289da",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              float: "right",
            }}
          >
            Send
          </button>
        </footer>
      </main>

      {/* Right panel: Online users */}
      <aside
        style={{
          width: "200px",
          backgroundColor: "#2f3136",
          color: "white",
          padding: "10px",
        }}
      >
        <h3>Online</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>Franta</li>
          <li>Petr</li>
        </ul>
      </aside>
    </div>
  );
};

export default Layout;
