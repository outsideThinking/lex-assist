import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Appointment from './pages/Appointment.jsx'
import './styles/global.css'

export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*"            element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}
