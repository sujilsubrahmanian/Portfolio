import React, { useState, useEffect } from 'react'

const stats = [
  { num: '3+', label: 'Years Coding'       },
  { num: '3',  label: 'Projects Shipped'   },
  { num: '2',  label: 'National Quals'     },
  { num: '2',  label: 'IBM Certifications' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)
  useEffect(() => { setTimeout(() => setVisible(true), 80) }, [])

  const fadeStyle = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(20px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  })

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        padding: '140px 0 160px',
        background: 'linear-gradient(135deg, #070b12 0%, #0d1525 50%, #0a1628 100%)',
      }}
    >
      {/* Blue ambient glows */}
      <div className="absolute -top-[5%] -right-[5%] w-[700px] h-[700px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 62%)' }} />
      <div className="absolute bottom-[10%] -left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(96,165,250,0.06) 0%, transparent 65%)' }} />
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)' }} />

      <div className="container relative z-10 w-full">

        {/* Greeting */}
        <div style={fadeStyle(0.05)} className="flex items-center gap-2.5 mb-4">
          <span className="font-sans text-[clamp(0.9rem,1.4vw,1.05rem)] font-normal text-text-2 tracking-[0.01em]">
            Hey there! I'm
          </span>
        </div>

        {/* Name */}
        <div style={fadeStyle(0.12)} className="mb-2.5 leading-none">
          <h1 className="font-display font-extrabold tracking-[-0.04em] leading-[0.92] text-text"
              style={{ fontSize: 'clamp(3.2rem, 8.5vw, 9rem)' }}>
            SUJIL <span className="text-accent">S</span>
          </h1>
        </div>

        {/* Role descriptor */}
        <div style={fadeStyle(0.22)} className="mb-9 flex items-center gap-3.5 flex-wrap">
          {['Full Stack Developer', 'React & Django', 'AI Applications'].map((role, i) => (
            <React.Fragment key={role}>
              {i > 0 && <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />}
              <span className="font-display font-semibold text-text-2 tracking-[-0.01em]"
                    style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.35rem)' }}>
                {role}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Available badge */}
        <div style={fadeStyle(0.30)} className="mb-7">
          <span className="inline-flex items-center gap-1.5 text-[0.72rem] font-mono tracking-[0.06em]
                           text-green bg-green/[0.08] border border-green/20 rounded-md px-3 py-1">
            <span className="w-1.5 h-1.5 bg-green rounded-full animate-pulse-glow" />
            Open to opportunities
          </span>
        </div>

        {/* Bio */}
        <p style={fadeStyle(0.38)}
           className="text-base text-text-2 leading-[1.82] mb-10 max-w-[520px]">
          I build full‑stack web applications and AI‑integrated platforms using React, Django, and Python.
          Currently pursuing{' '}
          <strong className="text-text font-medium">MTech at CUSAT</strong> while actively shipping
          real-world projects.{' '}
          <span className="text-text font-medium">UGC NET & GATE qualified.</span>
        </p>

        {/* CTA buttons */}
        <div style={fadeStyle(0.46)} className="flex flex-wrap gap-2.5 mb-16">
          <a href="https://drive.google.com/uc?export=download&id=1oj7iwq0NRwMMoI3QQIRE0mLj5XuX0h6b"
             target="_blank" rel="noreferrer" className="btn btn-secondary">
            ↓ Resume
          </a>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
          <a href="https://github.com/sujilsubrahmanian" target="_blank" rel="noreferrer" className="btn btn-ghost">
            <GhIcon /> GitHub
          </a>
          <a href="https://linkedin.com/in/sujil--s" target="_blank" rel="noreferrer" className="btn btn-ghost">
            <LiIcon /> LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div style={{ ...fadeStyle(0.54), borderColor: 'rgba(59,130,246,0.15)' }}
             className="flex gap-0 pt-7 border-t max-w-[480px] flex-wrap sm:flex-nowrap">
          {stats.map((s, i) => (
            <div key={i} className={`flex-1 pr-4 mr-4 min-w-[80px] ${i < 3 ? 'border-r' : ''}`}
                 style={{ borderColor: 'rgba(59,130,246,0.15)' }}>
              <div className="font-display text-[2rem] font-extrabold text-accent leading-none">
                {s.num}
              </div>
              <div className="text-[0.68rem] text-text-3 mt-1 font-mono">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10">
        <span className="text-[0.6rem] text-text-3 tracking-[0.15em] uppercase font-mono">scroll</span>
        <div className="w-px h-7" style={{ background: 'linear-gradient(to bottom, #3b82f6, transparent)' }} />
      </div>

      {/* Diagonal color break at the bottom — like abhijith.dev */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: '120px', zIndex: 5 }}
      >
        {/* Dark wedge cutting in from bottom-right */}
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <polygon points="0,120 1440,0 1440,120" fill="#070b12" />
        </svg>
      </div>
    </section>
  )
}

function GhIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}
function LiIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}
