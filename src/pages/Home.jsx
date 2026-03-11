import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Home.css'

/* ── Data ───────────────────────────────────────────── */
const SERVICES = [
  { icon: 'fas fa-users',          title: 'Family Law',         desc: 'Divorce, custody, adoption' },
  { icon: 'fas fa-gavel',          title: 'Criminal Law',       desc: 'Bail, FIR, trial' },
  { icon: 'fas fa-home',           title: 'Property Law',       desc: 'Sale deed, disputes' },
  { icon: 'fas fa-building',       title: 'Corporate Law',      desc: 'Contracts, compliance' },
  { icon: 'fas fa-scale-balanced', title: 'Civil Disputes',     desc: 'Recovery, injunctions' },
  { icon: 'fas fa-file-signature', title: 'Documentation',      desc: 'Affidavits, notices' },
  { icon: 'fas fa-file-lines',     title: 'Legal Notice',       desc: 'Draft & send' },
  { icon: 'fas fa-file-pen',       title: 'Affidavit Drafting', desc: 'Notarized format' },
  { icon: 'fas fa-file-contract',  title: 'Agreement Drafting', desc: 'Rent, employment' },
  { icon: 'fas fa-calendar-check', title: 'Appointment Letter', desc: 'Official letter' },
]

const LAWYERS = [
  {
    name: 'Adv. Sarah Mehta', specialty: 'Family & Corporate Law',
    exp: 12, rating: 4.7, stars: [1,1,1,1,0.5],
    barCouncil: 'DEL/1234/2012', practice: 'Family, Corporate, Documentation',
    fee: '₹3,500/session', slots: 'Mon–Fri 10AM–4PM',
  },
  {
    name: 'Adv. Rohan Khanna', specialty: 'Criminal & Property Law',
    exp: 9, rating: 5.0, stars: [1,1,1,1,1],
    barCouncil: 'MAH/789/2015', practice: 'Criminal, Property, Civil',
    fee: '₹4,000/session', slots: 'Tue–Sat 2PM–8PM',
  },
  {
    name: 'Adv. Priya Sharma', specialty: 'Corporate & Documentation',
    exp: 14, rating: 4.9, stars: [1,1,1,1,1],
    barCouncil: 'KAR/456/2010', practice: 'Corporate, Agreements',
    fee: '₹5,000/session', slots: 'Mon, Wed, Fri 9AM–1PM',
  },
]

const TESTIMONIALS = [
  { text: 'LexAssist made my property dispute so easy. The lawyer was very knowledgeable.', name: 'Amit G.' },
  { text: 'Quick appointment and professional documentation. Saved me hours of research.',   name: 'Neha S.' },
  { text: 'Affordable and transparent. The online consultation was just like meeting in person.', name: 'Vikram R.' },
]

const FAQS = [
  { q: 'How do I book a consultation?',  a: 'Click "Book Appointment", fill the Google Form, and receive a confirmation email within 24 hours.' },
  { q: 'Are the lawyers verified?',       a: 'Yes — we verify bar council registration numbers and years of experience before listing any lawyer.' },
  { q: 'What about document security?',   a: 'All uploaded files are encrypted and stored securely. We never share your documents with third parties.' },
  { q: 'What modes are available?',       a: 'You can choose Online (video call) or Offline (in-person) consultation when filling the form.' },
]

const WHY = [
  { icon: 'fa-check-circle', title: 'Trusted Lawyers',   desc: 'Verified & experienced professionals' },
  { icon: 'fa-clock',        title: 'Fast Appointments', desc: 'Confirmation within 24 hours' },
  { icon: 'fa-lock',         title: 'Secure Documents',  desc: 'End-to-end encrypted storage' },
  { icon: 'fa-headset',      title: 'Online Support',    desc: 'Chat & call available' },
]

/* ── Star renderer ──────────────────────────────────── */
function Stars({ pattern }) {
  return (
    <span className="star-rating">
      {pattern.map((v, i) =>
        v === 1   ? <i key={i} className="fas fa-star"></i>
        : v === 0.5 ? <i key={i} className="fas fa-star-half-alt"></i>
        : <i key={i} className="far fa-star"></i>
      )}
    </span>
  )
}

/* ── Component ──────────────────────────────────────── */
export default function Home() {
  const [openFaq,  setOpenFaq]  = useState(null)
  const [openCard, setOpenCard] = useState(null)
  const { hash }                = useLocation()

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        document.getElementById(hash.replace('#',''))?.scrollIntoView({ behavior:'smooth' })
      }, 100)
    }
  }, [hash])

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────────────── */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-tag"><i className="fas fa-shield-halved"></i> Trusted Legal Platform</div>
          <h1>Trusted Online<br />Legal Help</h1>
          <p>Expert legal consultation, documentation, and case guidance — from the comfort of your home.</p>
          <div className="hero-buttons">
            <Link to="/appointment" className="btn-primary">
              <i className="fas fa-calendar-check"></i> Book Appointment
            </Link>
            <a href="#lawyers" className="btn-outline" onClick={e => scrollTo(e,'lawyers')}>
              <i className="fas fa-user-tie"></i> Meet Our Lawyers
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>500+</strong><span>Cases Won</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><strong>50+</strong><span>Expert Lawyers</span></div>
            <div className="stat-divider"></div>
            <div className="stat"><strong>10K+</strong><span>Happy Clients</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-icon-wrap">
            <i className="fas fa-gavel"></i>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────── */}
      <section id="services" className="container">
        <h2>Legal services we offer</h2>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon"><i className={s.icon}></i></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────── */}
      <section className="why-section">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="why-grid">
            {WHY.map((w, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon"><i className={`fas ${w.icon}`}></i></div>
                <h4>{w.title}</h4>
                <p>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAWYERS ──────────────────────────────────── */}
      <section id="lawyers" className="container">
        <h2>Our expert lawyers</h2>
        <div className="lawyer-grid">
          {LAWYERS.map((l, i) => (
            <div className="lawyer-card" key={i}>
              <div className="lawyer-img"><i className="fas fa-user-tie"></i></div>
              <div className="lawyer-info">
                <h3>{l.name}</h3>
                <div className="specialty">{l.specialty}</div>
                <div className="exp">
                  {l.exp} yrs exp &nbsp;<Stars pattern={l.stars} /> <b>{l.rating}</b>
                </div>
                <button
                  className="btn-outline profile-btn"
                  onClick={() => setOpenCard(openCard === i ? null : i)}
                >
                  {openCard === i ? 'Hide Profile' : 'View Profile'}
                </button>
                {openCard === i && (
                  <div className="profile-preview">
                    <div className="profile-row"><i className="fas fa-id-card"></i><span><b>Bar Council:</b> {l.barCouncil}</span></div>
                    <div className="profile-row"><i className="fas fa-briefcase"></i><span><b>Practice:</b> {l.practice}</span></div>
                    <div className="profile-row"><i className="fas fa-indian-rupee-sign"></i><span><b>Fee:</b> {l.fee}</span></div>
                    <div className="profile-row"><i className="fas fa-clock"></i><span><b>Slots:</b> {l.slots}</span></div>
                    <Link to="/appointment" className="btn-primary book-btn">
                      <i className="fas fa-calendar-plus"></i> Book This Lawyer
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────── */}
      <section className="testi-section">
        <div className="container">
          <h2>What our clients say</h2>
          <div className="testi-grid">
            {TESTIMONIALS.map((t, i) => (
              <div className="testi-card" key={i}>
                <i className="fas fa-quote-right quote-icon"></i>
                <p>"{t.text}"</p>
                <div className="client">
                  <div className="client-avatar"></div>
                  <div><strong>— {t.name}</strong> <span className="badge">verified</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPOINTMENT CTA ──────────────────────────── */}
      <section id="appointment" className="appt-cta">
        <div className="appt-cta-inner container">
          <div className="appt-cta-text">
            <h2>Ready to Book?</h2>
            <p>Fill our quick appointment form and get expert legal help within 24 hours. It's free to book.</p>
            <ul className="appt-list">
              <li><i className="fas fa-check-circle"></i> Choose your lawyer & time slot</li>
              <li><i className="fas fa-check-circle"></i> Online or in-person sessions</li>
              <li><i className="fas fa-check-circle"></i> Instant email confirmation</li>
            </ul>
            <Link to="/appointment" className="btn-primary appt-btn">
              <i className="fas fa-calendar-plus"></i> Book Appointment Now
            </Link>
          </div>
          <div className="appt-cta-icon">
            <i className="fas fa-calendar-check"></i>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────── */}
      <section id="faq" className="container">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {FAQS.map((f, i) => (
            <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
              <button className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <i className={`fas fa-chevron-${openFaq === i ? 'up' : 'down'}`}></i>
              </button>
              {openFaq === i && <p className="faq-a">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────── */}
      <section id="contact" className="container">
        <h2>Contact us</h2>
        <div className="contact-grid">
          <div className="contact-details">
            <div className="contact-item"><i className="fas fa-map-marker-alt"></i><span>123 Legal Square, New Delhi, India</span></div>
            <div className="contact-item"><i className="fas fa-phone"></i><span>+91 11 2345 6789</span></div>
            <div className="contact-item"><i className="fas fa-envelope"></i><span>support@lexassist.in</span></div>
            <div className="contact-item"><i className="fas fa-clock"></i><span>Mon–Fri &nbsp;9AM – 8PM</span></div>
          </div>
          <div className="map-box">
            <i className="fas fa-map"></i>
            <span>Embed your Google Map here</span>
          </div>
        </div>

        <div id="about" className="about-block">
          <h2>About LexAssist</h2>
          <p>We are an online legal platform bridging clients and trusted lawyers. Our mission is to make legal help accessible, transparent, and efficient. With verified professionals and secure documentation, we serve individuals and businesses alike.</p>
        </div>
      </section>
    </>
  )
}
