import React from 'react'
import messages from './state/channelMessages'

export default function Chat() {
  return (
    <div>
      <h2>Chatovací místnost</h2>
      <ul>
        {messages.map((msg, idx) => (
          <li key={idx}><strong>{msg.user}:</strong> {msg.text}</li>
        ))}
      </ul>
    </div>
  )
}
