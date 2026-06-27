import React from 'react'

const facts = [
  { label: 'Role',      value: 'Full Stack Developer'                },
  { label: 'Currently', value: 'MTech IT Business Analytics @ CUSAT' },
  { label: 'Location',  value: 'Kerala, India'                       },
  { label: 'Phone',     value: '+91 8139831540'                      },
  { label: 'Email',     value: 'sujilsubrahmanian2001@gmail.com'     },
]

const strengths = [
  'Written & Verbal Communication',
  'Analytical Thinking',
  'Quick Learner',
  'Team Coordination',
  'Adaptable',
  'Problem Solving',
]

export default function About() {
  return (
    <section id="about" className="section border-t border-border">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">Building things that <em>matter</em></h2>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_370px] gap-16 items-start">

          {/* Left — bio */}
          <div>
            <p className="text-[1.05rem] text-text-2 leading-[1.88] mb-5">
              I'm <strong className="text-text font-semibold">Sujil S</strong> — a full stack developer with
              hands-on experience building production-level web applications and AI-integrated platforms. I work
              across the stack with <strong className="text-text font-medium">React, Django, Python</strong>,
              and various databases.
            </p>
            <p className="text-base text-text-2 leading-[1.88] mb-5">
              Alongside development, I'm pursuing{' '}
              <strong className="text-text font-medium">MTech in IT Business Analytics & Intelligence at CUSAT</strong>{' '}
              — deepening expertise in data systems and intelligent applications. I also hold{' '}
              <span className="text-accent font-medium">UGC NET (Computer Science, 2024)</span> and{' '}
              <span className="text-accent font-medium">GATE CSE (2023)</span> qualifications, reflecting
              a strong grip on CS fundamentals.
            </p>
            <p className="text-base text-text-2 leading-[1.88] mb-9">
              I care about clean architecture, reliable APIs, and software that solves real problems. I pick
              up new technologies fast and collaborate effectively across teams to deliver outcomes that align
              with business goals.
            </p>

            <div className="flex gap-2.5 flex-wrap mb-9">
              <a href="https://github.com/sujilsubrahmanian" target="_blank" rel="noreferrer"
                 className="btn btn-outline py-2 px-4 text-[0.83rem]">
                GitHub →
              </a>
              <a href="https://linkedin.com/in/sujil--s" target="_blank" rel="noreferrer"
                 className="btn btn-outline py-2 px-4 text-[0.83rem]">
                LinkedIn →
              </a>
            </div>

            {/* Strengths */}
            <div className="p-[18px_22px] bg-bg-2 border border-border rounded-[10px]">
              <div className="font-mono text-[0.65rem] text-text-3 tracking-[0.16em] uppercase mb-3">
                Strengths
              </div>
              <div className="flex gap-1.5 flex-wrap">
                {strengths.map((s) => (
                  <span key={s}
                        className="text-[0.78rem] text-text-2 bg-white/[0.04] border border-border
                                   rounded-md px-2.5 py-1">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — quick facts */}
          <div className="flex flex-col gap-px">
            {facts.map((f, i) => (
              <FactRow key={i} f={f} i={i} total={facts.length} />
            ))}

            {/* Status badge */}
            <div className="mt-2.5 p-[13px_17px] bg-green/[0.06] border border-green/[0.18]
                            rounded-[10px] flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green shadow-[0_0_8px_#3db88a]
                               flex-shrink-0 animate-pulse-glow" />
              <div>
                <div className="text-[0.65rem] text-green font-mono tracking-[0.12em] uppercase">
                  Status
                </div>
                <div className="text-[0.86rem] text-text font-medium mt-0.5">
                  Actively seeking opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FactRow({ f, i, total }) {
  const [hovered, setHovered] = React.useState(false)
  const radius =
    i === 0 ? 'rounded-[10px_10px_3px_3px]'
    : i === total - 1 ? 'rounded-[3px_3px_10px_10px]'
    : 'rounded-sm'

  return (
    <div
      className={`flex justify-between items-center p-[13px_17px] bg-card border
                  transition-all duration-200 ${radius} ${
                    hovered ? 'border-border-2 bg-white/[0.02]' : 'border-border'
                  }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="text-[0.67rem] font-mono text-text-3 tracking-[0.12em] uppercase">
        {f.label}
      </div>
      <div className="text-[0.84rem] text-text font-medium text-right max-w-[60%] leading-snug">
        {f.value}
      </div>
    </div>
  )
}
