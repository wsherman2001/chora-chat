import React from 'react';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <h3>Channels</h3>
        <ul>
          <li># general</li>
          <li># memes</li>
          <li># dev-talk</li>
        </ul>
      </aside>

      <main className="chat">
        <div className="chat-header">Welcome to Chora Chat!</div>
        <div className="chat-messages">
          <div className="message">Hello world!</div>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </main>

      <aside className="users">
        <h3>Online</h3>
        <ul>
          <li>Franta</li>
          <li>Lucie</li>
          <li>Karel</li>
        </ul>
      </aside>
    </div>
  );
} 
