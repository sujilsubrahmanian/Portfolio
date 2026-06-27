import React, { useState } from 'react'

const facts = [
  { label: 'Role',      value: 'Full Stack Developer' },
  { label: 'Currently', value: 'MTech IT Business Analytics @ CUSAT' },
  { label: 'Location',  value: 'Kerala, India' },
  { label: 'Phone',     value: '+91 8139831540' },
  { label: 'Email',     value: 'sujilsubrahmanian2001@gmail.com' },
]

const strengths = [
  'Written and Verbal Communication',
  'Analytical Thinking',
  'Quick Learner',
  'Team Coordination',
  'Adaptable',
  'Problem Solving',
]

export default function About() {
  return (
    <section id="about" className="section border-t border-white/10">
      <div className="container">

        <p className="section-label">About</p>
        <h2 className="section-title">Building things that <em>matter</em></h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-base text-text-2 leading-relaxed mb-5">
              I am <strong className="text-white font-semibold">Sujil S</strong> — a full stack developer with
              hands-on experience building production level web applications and AI integrated platforms.
              I work across the stack with <strong className="text-white font-medium">React, Django, and Python</strong>.
            </p>
            <p className="text-base text-text-2 leading-relaxed mb-5">
              I am currently pursuing <strong className="text-white font-medium">MTech in IT Business Analytics at CUSAT</strong>,
              deepening my expertise in data systems and intelligent applications. I also hold{' '}
              <span className="text-accent font-medium">UGC NET Computer Science 2024</span> and{' '}
              <span className="text-accent font-medium">GATE CSE 2023</span> qualifications.
            </p>
            <p className="text-base text-text-2 leading-relaxed mb-9">
              I care about clean architecture, reliable APIs, and software that solves real problems.
              I pick up new technologies fast and collaborate effectively across teams.
            </p>

            <div className="flex gap-3 flex-wrap mb-9">
              <a href="https://github.com/sujilsubrahmanian" target="_blank" rel="noreferrer" className="btn btn-outline py-2 px-4 text-sm">
                GitHub
              </a>
              <a href="https://linkedin.com/in/sujil--s" target="_blank" rel="noreferrer" className="btn btn-outline py-2 px-4 text-sm">
                LinkedIn
              </a>
            </div>

            <div className="p-5 bg-white/[0.02] border border-white/10 rounded-xl">
              <div className="font-mono text-xs text-text-3 tracking-widest uppercase mb-3">Strengths</div>
              <div className="flex gap-2 flex-wrap">
                {strengths.map((s) => (
                  <span key={s} className="text-xs text-text-2 bg-white/[0.04] border border-white/10 rounded-md px-3 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-px">
            {facts.map((f, i) => (
              <FactRow key={i} f={f} i={i} total={facts.length} />
            ))}

            <div className="mt-3 p-4 bg-green/[0.06] border border-green/20 rounded-xl flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green flex-shrink-0 animate-pulse-glow" />
              <div>
                <div className="text-xs text-green font-mono tracking-widest uppercase">Status</div>
                <div className="text-sm text-white font-medium mt-0.5">Actively seeking opportunities</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function FactRow({ f, i, total }) {
  const [hovered, setHovered] = useState(false)
  const radius =
    i === 0 ? 'rounded-t-xl rounded-b-sm'
    : i === total - 1 ? 'rounded-b-xl rounded-t-sm'
    : 'rounded-sm'

  return (
    <div
      className={`flex justify-between items-center p-4 bg-card border transition-all duration-200 ${radius} ${
        hovered ? 'border-white/20 bg-white/[0.03]' : 'border-white/10'
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-xs font-mono text-text-3 tracking-widest uppercase">{f.label}</div>
      <div className="text-sm text-white font-medium text-right max-w-xs leading-snug">{f.value}</div>
    </div>
  )
}
