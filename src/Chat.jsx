// src/Chat.jsx
import React, { useState, useEffect } from "react";

const Chat = ({ messages, sendMessage }) => {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      sendMessage(text.trim());
      setText("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <span className="text-gray-800">{msg.text}</span>{" "}
            <span className="text-gray-400 text-sm">
              ({new Date(msg.timestamp).toLocaleTimeString()})
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          className="flex-1 border p-2"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button onClick={handleSend} className="ml-2 px-4 py-2 border">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
