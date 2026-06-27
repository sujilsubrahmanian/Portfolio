import React, { useState, useEffect } from 'react'

const stats = [
  { num: '3+', label: 'Years Coding' },
  { num: '3',  label: 'Projects Shipped' },
  { num: '2',  label: 'National Quals' },
  { num: '2',  label: 'IBM Certifications' },
]

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  const fade = (delay) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : 'translateY(20px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  })

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden" style={{ padding: '140px 0 120px' }}>

      <div className="absolute -top-20 -right-20 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(232,103,60,0.07) 0%, transparent 62%)' }} />
      <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(74,144,217,0.04) 0%, transparent 65%)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />

      <div className="container relative z-10 w-full">

        <div style={fade(0.05)} className="flex items-center gap-2.5 mb-4">
          <span className="text-xl">👋</span>
          <span className="text-base text-text-2">Hey there! I am</span>
        </div>

        <div style={fade(0.15)} className="mb-3">
          <h1 className="font-display font-extrabold tracking-tight leading-none text-white" style={{ fontSize: 'clamp(4rem, 10.5vw, 9rem)' }}>
            SUJIL <span className="text-accent">S</span>
          </h1>
        </div>

        <div style={fade(0.25)} className="flex items-center gap-3 flex-wrap mb-8">
          {['Full Stack Developer', 'React and Django', 'AI Applications'].map((role, i) => (
            <React.Fragment key={role}>
              {i > 0 && <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" />}
              <span className="font-display font-semibold text-text-2" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
                {role}
              </span>
            </React.Fragment>
          ))}
        </div>

        <div style={fade(0.32)} className="mb-7">
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-green bg-green/10 border border-green/20 rounded-md px-3 py-1">
            <span className="w-1.5 h-1.5 bg-green rounded-full animate-pulse-glow" />
            Open to opportunities
          </span>
        </div>

        <p style={fade(0.40)} className="text-base text-text-2 leading-relaxed mb-10 max-w-xl">
          I build full stack web applications and AI integrated platforms using React, Django, and Python.
          Currently pursuing <strong className="text-white font-medium">MTech at CUSAT</strong> while
          actively shipping real world projects.{' '}
          <span className="text-white font-medium">UGC NET and GATE qualified.</span>
        </p>

        <div style={fade(0.48)} className="flex flex-wrap gap-3 mb-16">
          <a href="https://drive.google.com/uc?export=download&id=197HOrfwkqcSZFvyCktguVAS18RUsRVHg" target="_blank" rel="noreferrer" className="btn btn-secondary">
            Download Resume
          </a>
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Get in Touch</a>
          <a href="https://github.com/sujilsubrahmanian" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
          <a href="https://linkedin.com/in/sujil--s" target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a>
        </div>

        <div style={fade(0.56)} className="flex pt-7 border-t border-white/10 max-w-lg">
          {stats.map((s, i) => (
            <div key={i} className={`flex-1 pr-4 mr-4 ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
              <div className="font-display text-3xl font-extrabold text-accent leading-none">{s.num}</div>
              <div className="text-xs text-text-3 mt-1 font-mono">{s.label}</div>
            </div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <span className="text-xs text-text-3 tracking-widest uppercase font-mono">scroll</span>
        <div className="w-px h-7" style={{ background: 'linear-gradient(to bottom, #e8673c, transparent)' }} />
      </div>

    </section>
  )
}
