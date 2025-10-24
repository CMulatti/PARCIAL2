import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './freelancer.css'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Detail from './pages/Detail.jsx'
import Admin from './pages/Admin.jsx'
import { useBirds } from './hooks/useBirds.js'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'


function App() {
  const { birds, addBird } = useBirds()

  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Public route - login page */}
        <Route path="/login" element={<Login />} />
        
        {/* Public route - homepage with bird list */}
        <Route 
          path="/" 
          element={<Home birds={birds} />} 
        />
        
        {/* Public route - bird detail page */}
        <Route 
          path="/bird/:birdId" 
          element={<Detail birds={birds} />} 
        />
        
        {/* Protected route - admin panel (only for admins) */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute requireAdmin={true}>
              <Admin birds={birds} onAddBird={addBird} />
            </ProtectedRoute>
          } 
        />
        
        {/* Catch all - redirect to home */}
        <Route path="*" element={<Home birds={birds} />} />
      </Routes>
    </Router>
  )
}

export default App