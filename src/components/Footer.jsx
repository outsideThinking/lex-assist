import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-col">
          <div className="footer-logo">Lex<span>Assist</span></div>
          <p className="footer-desc">Trusted online legal help, accessible to everyone.</p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <a href="/#home">Home</a>
          <a href="/#services">Services</a>
          <a href="/#lawyers">Lawyers</a>
          <Link to="/appointment">Book Appointment</Link>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <a href="/#faq">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms &amp; Conditions</a>
          <a href="#">Disclaimer</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <p><i className="fas fa-map-marker-alt"></i> 123 Legal Square, New Delhi</p>
          <p><i className="fas fa-phone"></i> +91 11 2345 6789</p>
          <p><i className="fas fa-envelope"></i> support@lexassist.in</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        © 2025 LexAssist — Trusted Online Legal Help. All rights reserved.
      </div>
    </footer>
  )
}
