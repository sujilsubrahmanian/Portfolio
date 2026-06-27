import React from 'react'

const edu = [
  {
    period: '2025 – 2027',
    degree: 'MTech — IT Business Analytics & Intelligence',
    institution: 'Cochin University of Science and Technology (CUSAT)',
    location: 'Kochi, Kerala',
    current: true,
    note: 'Specialising in intelligent systems, data analytics, and business intelligence while continuing to build production applications.',
  },
  {
    period: '2023 – 2025',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Cochin University of Science and Technology (CUSAT)',
    location: 'Kochi, Kerala',
    current: false,
    note: 'Developed deep expertise in software engineering, databases, algorithms, and system design. Built major projects during this period.',
  },
  {
    period: '2019 – 2022',
    degree: 'BSc Electronics',
    institution: 'Government College Chittur, Calicut University',
    location: 'Palakkad, Kerala',
    current: false,
    note: 'Foundation in electronics, digital circuits, signals, and embedded systems — sharpened analytical and problem-solving skills.',
  },
]

export default function Education() {
  return (
    <section id="education" className="section border-t border-border">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title">Academic <em>background</em></h2>

        <div className="max-w-[720px] flex flex-col gap-0.5">
          {edu.map((e, i) => (
            <div
              key={i}
              className={`p-[26px_28px] border transition-colors duration-200
                          ${e.current ? 'bg-accent/[0.04] border-accent/25' : 'bg-card border-border'}
                          ${i === 0 ? 'rounded-[12px_12px_3px_3px]'
                            : i === edu.length - 1 ? 'rounded-[3px_3px_12px_12px]'
                            : 'rounded-sm'}`}
            >
              <div className="flex justify-between items-start flex-wrap gap-2.5 mb-2.5">
                <div>
                  <h3 className="font-display text-[1.05rem] font-bold text-text mb-1 tracking-[-0.01em]">
                    {e.degree}
                  </h3>
                  <p className="text-[0.85rem] text-accent font-medium">{e.institution}</p>
                  <p className="text-[0.78rem] text-text-3 mt-0.5 font-mono">📍 {e.location}</p>
                </div>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="font-mono text-[0.72rem] text-text-3 bg-white/[0.05]
                                   border border-border rounded-[5px] px-2.5 py-[3px]">
                    {e.period}
                  </span>
                  {e.current && (
                    <span className="text-[0.65rem] font-semibold tracking-[0.1em] uppercase
                                     text-green bg-green/10 border border-green/22
                                     rounded-[5px] px-2 py-[2px] flex items-center gap-1">
                      <span className="w-[5px] h-[5px] rounded-full bg-green animate-pulse-glow" />
                      Current
                    </span>
                  )}
                </div>
              </div>
              <p className="text-[0.84rem] text-text-3 leading-[1.65]">{e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
