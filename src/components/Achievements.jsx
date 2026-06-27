import React from 'react'

const achievements = [
  {
    icon: '🏛️',
    badge: 'National Exam',
    title: 'UGC NET Qualified',
    year: '2024',
    desc: "National eligibility test in Computer Science, conducted by NTA. Qualifies for lectureship and JRF — one of India's most competitive academic qualifications.",
    color: '#e8673c',
  },
  {
    icon: '⚙️',
    badge: 'National Exam',
    title: 'GATE Qualified',
    year: '2023',
    desc: 'Graduate Aptitude Test in Engineering (CSE) — a gateway to top IITs and PSUs, benchmarking core CS fundamentals at a national level.',
    color: '#3db88a',
  },
  {
    icon: '🤖',
    badge: 'IBM Certified',
    title: 'IBM AI Certifications',
    year: '2024',
    desc: '"Getting Started with Artificial Intelligence" (IBM Certificate) and "Artificial Intelligence Fundamentals" (IBM Skills Build Certificate) — both from IBM.',
    color: '#4a90d9',
  },
]

export default function Achievements() {
  return (
    <>
      {/* Achievements */}
      <section id="achievements" className="section border-t border-border">
        <div className="container">
          <p className="section-label">Achievements</p>
          <h2 className="section-title">Credentials & <em>certifications</em></h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
            {achievements.map((a, i) => (
              <AchievementCard key={i} a={a} i={i} total={achievements.length} />
            ))}
          </div>
        </div>
      </section>

      {/* Resume CTA */}
      <section id="resume" className="border-t border-border py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl p-10 md:p-11
                          bg-accent/[0.04] border border-accent/25
                          grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
            {/* Glow */}
            <div className="absolute -top-[20%] right-[5%] w-[280px] h-[280px] rounded-full pointer-events-none"
                 style={{ background: 'radial-gradient(circle, rgba(232,103,60,0.07), transparent)' }} />

            <div className="relative">
              <p className="font-mono text-[0.65rem] text-accent tracking-[0.18em] uppercase mb-2.5">
                Curriculum Vitae
              </p>
              <h2 className="font-display font-extrabold tracking-tight mb-3.5"
                  style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>
                Download my <span className="text-accent">Resume</span>
              </h2>
              <p className="text-[0.95rem] text-text-2 leading-[1.72] max-w-[480px] mb-4">
                Full breakdown of projects, education, and technical skills — including AI-integrated apps,
                ML pipelines, UGC NET & GATE qualifications, and IBM certifications.
              </p>
              <div className="flex gap-1.5 flex-wrap">
                {['React', 'Django', 'Python', 'PostgreSQL', 'Firebase', 'IBM Watson', 'Random Forest'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2.5 flex-shrink-0 relative">
              <a
                href="https://drive.google.com/uc?export=download&id=197HOrfwkqcSZFvyCktguVAS18RUsRVHg"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary text-[0.9rem] py-3 px-6 whitespace-nowrap"
              >
                ↓ Download Resume
              </a>
              <a
                href="mailto:sujilsubrahmanian2001@gmail.com?subject=Resume Request&body=Hi Sujil, please send me your resume."
                className="btn btn-outline text-[0.85rem] py-[11px] px-6 text-center justify-center"
              >
                Request via Email
              </a>
              <p className="text-[0.68rem] text-text-3 text-center font-mono">PDF · Updated 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function AchievementCard({ a, i, total }) {
  const [hovered, setHovered] = React.useState(false)
  const radius =
    i === 0 ? 'rounded-[12px_3px_3px_12px] md:rounded-[12px_3px_3px_12px]'
    : i === total - 1 ? 'rounded-[3px_12px_12px_3px] md:rounded-[3px_12px_12px_3px]'
    : 'rounded-sm'

  return (
    <div
      className={`p-6 bg-card border flex flex-col gap-3.5 cursor-default
                  transition-all duration-[220ms] ${radius}
                  ${hovered ? '-translate-y-[3px] shadow-[0_16px_40px_rgba(0,0,0,0.5)]' : ''}`}
      style={{ borderColor: hovered ? `${a.color}50` : 'rgba(255,255,255,0.07)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-between">
        <span className="text-[1.7rem]">{a.icon}</span>
        <span
          className="text-[0.62rem] font-semibold tracking-[0.1em] uppercase rounded-[5px] px-2 py-[3px]"
          style={{ color: a.color, background: `${a.color}12`, border: `1px solid ${a.color}28` }}
        >
          {a.badge}
        </span>
      </div>
      <div>
        <div className="font-display text-[1.05rem] font-bold text-text mb-0.5 tracking-[-0.01em]">
          {a.title}
        </div>
        <div className="font-mono text-[0.72rem] mb-2.5" style={{ color: a.color }}>{a.year}</div>
        <p className="text-[0.84rem] text-text-2 leading-[1.65]">{a.desc}</p>
      </div>
    </div>
  )
}
