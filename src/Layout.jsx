import React from 'react'

export default function Layout({ children }) {
  return (
    <div style={{ padding: 20 }}>
      <h1>Chora Chat</h1>
      {children}
    </div>
  )
}
