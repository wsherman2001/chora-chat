import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    setMessages([...messages, input.trim()]);
    setInput("");
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "1rem" }}>
      <h1 style={{ background: "#111", color: "#fff", padding: "1rem" }}>
        Welcome to Chora Chat!
      </h1>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          height: "300px",
          overflowY: "auto",
          marginTop: "1rem",
          background: "#f9f9f9"
        }}
      >
        {messages.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          messages.map((msg, i) => (
            <div
              key={i}
              style={{
                marginBottom: "0.5rem",
                padding: "0.5rem",
                background: "#e1f5fe",
                borderRadius: "5px"
              }}
            >
              {msg}
            </div>
          ))
        )}
      </div>

      <form onSubmit={
