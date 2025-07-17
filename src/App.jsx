import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Chat from './Chat'
import Layout from './Layout'

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Chat />} />
        </Routes>
      </Layout>
    </Router>
  )
}
