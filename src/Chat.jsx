// src/Chat.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function Chat() {
  const { channelId } = useParams();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, time: new Date().toLocaleTimeString() }]);
      setInput("");
    }
  };

  return (
    <div>
      <h3>#{channelId}</h3>
      <div
        style={{
          height: "400px",
          backgroundColor: "white",
          padding: "10px",
          overflowY: "auto",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      >
        {messages.map((msg, idx) => (
          <div key={idx} style={{ backgroundColor: "#e3e3e3", padding: "5px", margin: "5px 0", borderRadius: "5px" }}>
            <strong>You</strong> [{msg.time}]: {msg.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder={`Message #${channelId}`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
        style={{ width: "80%", padding: "8px" }}
      />
      <button onClick={handleSend} style={{ padding: "8px 12px", marginLeft: "5px" }}>
        Send
      </button>
    </div>
  );
}
