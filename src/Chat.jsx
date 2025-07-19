import { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';

const socket = io(); // vite proxy will route to localhost:3002

export default function Chat() {
  const [nickname, setNickname] = useState('');
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);

  useEffect(() => {
    socket.on('load messages', setMessages);
    socket.on('chat message', (msg) => setMessages((m) => [...m, msg]));
    return () => {
      socket.off('load messages');
      socket.off('chat message');
    };
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const join = () => {
    const nick = prompt('Pick a nickname:')?.trim() || 'Anonymous';
    setNickname(nick);
  };

  const send = (e) => {
    e.preventDefault();
    if (!draft.trim() || !nickname) return;
    socket.emit('chat message', { nickname, text: draft });
    setDraft('');
  };

  if (!nickname) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button onClick={join}>Join Chat</button>
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ul style={{ flex: 1, overflowY: 'auto', listStyle: 'none', padding: 8, background: '#1e1e1e', color: '#eee' }}>
        {messages.map((m, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            <strong style={{ color: '#0af' }}>{m.nickname}</strong>
            <span style={{ fontSize: '0.7rem', color: '#888', marginLeft: 6 }}>{m.time}</span>
            <br />{m.text}
          </li>
        ))}
        <div ref={bottomRef} />
      </ul>

      <form onSubmit={send} style={{ display: 'flex', padding: 8, background: '#222' }}>
        <input
          style={{ flex: 1, padding: 10, border: 'none', outline: 'none' }}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Type a message…"
        />
        <button style={{ marginLeft: 6, padding: '10px 14px', border: 'none', background: '#0af', color: '#111' }}>Send</button>
      </form>
    </div>
  );
}