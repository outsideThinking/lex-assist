import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { siteData } from '../data.js'
import './Appointment.css'

/**
 * ════════════════════════════════════════════════════
 *   🔧 PASTE YOUR GOOGLE FORM URL BELOW
 *   Example: 'https://forms.gle/XXXXXXXXXXXXXXXXXX'
 * ════════════════════════════════════════════════════
 */
const GOOGLE_FORM_URL = siteData.appointment.googleFormUrl

const STEPS = [
  { icon: 'fas fa-hand-pointer',  label: 'Click "Open Form"'          },
  { icon: 'fas fa-pen-to-square', label: 'Fill appointment details'   },
  { icon: 'fas fa-envelope-circle-check', label: 'Get email confirmation' },
]

const LAWYERS = [
  { name: 'Adv. Sarah Mehta',  specialty: 'Family & Corporate', fee: '₹3,500' },
  { name: 'Adv. Rohan Khanna', specialty: 'Criminal & Property', fee: '₹4,000' },
  { name: 'Adv. Priya Sharma', specialty: 'Corporate & Docs',    fee: '₹5,000' },
]

export default function Appointment() {
  const [state,    setState]    = useState('idle')   // idle | counting | done
  const [count,    setCount]    = useState(3)

  useEffect(() => {
    if (state !== 'counting') return
    if (count === 0) {
      window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
      setState('done')
      return
    }
    const t = setTimeout(() => setCount(c => c - 1), 1000)
    return () => clearTimeout(t)
  }, [state, count])

  const openNow = () => {
    window.open(GOOGLE_FORM_URL, '_blank', 'noopener,noreferrer')
    setState('done')
  }

  const startBook = () => {
    setCount(3)
    setState('counting')
  }

  return (
    <div className="appt-page">

      {/* ── Top hero banner ─────────────────────────── */}
      <div className="appt-hero">
        <div className="appt-hero-text">
          <span className="appt-tag"><i className="fas fa-calendar-plus"></i> Book an Appointment</span>
          <h1>Get Expert Legal Help<br />in Minutes</h1>
          <p>Our booking form opens in Google Forms — quick, secure, and takes under 2 minutes.</p>
        </div>
        <div className="appt-hero-img">
          <i className="fas fa-calendar-check"></i>
        </div>
      </div>

      <div className="appt-body">

        {/* ── How it works ────────────────────────────── */}
        <div className="how-section">
          <h2>How it works</h2>
          <div className="steps-row">
            {STEPS.map((s, i) => (
              <React.Fragment key={i}>
                <div className="step-box">
                  <div className="step-num">{i + 1}</div>
                  <div className="step-ico"><i className={s.icon}></i></div>
                  <p>{s.label}</p>
                </div>
                {i < STEPS.length - 1 && <div className="step-arrow"><i className="fas fa-arrow-right"></i></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ── Main card ───────────────────────────────── */}
        <div className="main-card">

          {/* Left */}
          <div className="card-left">
            <h3>Ready to book?</h3>
            <p>Click the button below to open our appointment form. You can select your preferred lawyer, date, time, and consultation mode.</p>

            <ul className="card-features">
              <li><i className="fas fa-check-circle"></i> Free to book — no advance payment</li>
              <li><i className="fas fa-check-circle"></i> Takes only 2 minutes to fill</li>
              <li><i className="fas fa-check-circle"></i> Instant email confirmation</li>
              <li><i className="fas fa-check-circle"></i> 100% secure &amp; confidential</li>
            </ul>

            {/* ── Button states ─────────────────────── */}
            <div className="action-area">
              {state === 'idle' && (
                <button className="btn-open" onClick={startBook}>
                  <i className="fas fa-calendar-plus"></i>
                  Open Appointment Form
                </button>
              )}

              {state === 'counting' && (
                <div className="countdown-row">
                  <div className="countdown-circle">
                    <span>{count}</span>
                  </div>
                  <div>
                    <p className="opening-msg">Opening form in {count} second{count !== 1 ? 's' : ''}…</p>
                    <button className="btn-skip" onClick={openNow}>Open now instead</button>
                  </div>
                </div>
              )}

              {state === 'done' && (
                <div className="success-box">
                  <i className="fas fa-circle-check"></i>
                  <div>
                    <strong>Form opened in a new tab!</strong>
                    <p>Didn't open? <button className="link-btn" onClick={openNow}>Click here</button></p>
                  </div>
                </div>
              )}
            </div>

            {/* Always-visible direct link */}
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="direct-link">
              <i className="fas fa-arrow-up-right-from-square"></i> Open form directly
            </a>
          </div>

          {/* Right */}
          <div className="card-right">
            {/* Info */}
            <div className="info-panel">
              <h4><i className="fas fa-circle-info"></i> What you'll need to fill</h4>
              <ul>
                <li>Your full name, email &amp; phone</li>
                <li>Preferred lawyer &amp; legal category</li>
                <li>Preferred date &amp; time slot</li>
                <li>Online or in-person preference</li>
                <li>Brief case description (optional)</li>
              </ul>
              <div className="info-note">
                <i className="fas fa-clock"></i> Response within <strong>24 hours</strong>
              </div>
            </div>

            {/* Lawyers mini */}
            <div className="lawyers-panel">
              <h4>Available lawyers</h4>
              {LAWYERS.map((l, i) => (
                <div className="lm-row" key={i}>
                  <div className="lm-avatar"><i className="fas fa-user-tie"></i></div>
                  <div className="lm-info">
                    <strong>{l.name}</strong>
                    <span>{l.specialty} &nbsp;·&nbsp; {l.fee}/session</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>{/* end main-card */}

        <div className="back-row">
          <Link to="/" className="back-link">
            <i className="fas fa-arrow-left"></i> Back to Home
          </Link>
        </div>

      </div>{/* end appt-body */}
    </div>
  )
}
