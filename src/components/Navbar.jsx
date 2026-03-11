import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const NAV = [
  { label: 'Home',        href: '/#home' },
  { label: 'Services',    href: '/#services' },
  { label: 'Lawyers',     href: '/#lawyers' },
  { label: 'About',       href: '/#about' },
  { label: 'Contact',     href: '/#contact' },
]

export default function Navbar() {
  const [open,     setOpen]     = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname }            = useLocation()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => setOpen(false), [pathname])

  const scrollTo = (e, href) => {
    setOpen(false)
    if (!href.startsWith('/#')) return
    e.preventDefault()
    const id = href.replace('/#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <Link to="/" className="logo">Lex<span>Assist</span></Link>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="menu">
        <i className={`fas fa-${open ? 'times' : 'bars'}`}></i>
      </button>

      <div className={`nav-links${open ? ' show' : ''}`}>
        {NAV.map(n => (
          <a key={n.label} href={n.href} onClick={e => scrollTo(e, n.href)}>{n.label}</a>
        ))}
        <Link to="/appointment" className="cta-btn">Book Appointment</Link>
      </div>
    </nav>
  )
}
