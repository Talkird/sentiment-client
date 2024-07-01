import './assets/main.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Comments from './dashboards/Comments'
import Posts from './dashboards/Posts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path=":search/comments" element={<Comments />} />
          <Route path=":search/posts" element={<Posts />} />
          <Route path="" element={<div>Welcome to the Dashboard</div>} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  </React.StrictMode>
)
