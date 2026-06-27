import React, { useState } from 'react'

const groups = [
  {
    name: 'Languages', icon: '⌨️',
    items: ['Python', 'JavaScript', 'Java', 'C++', 'C', 'HTML / CSS'],
    levels: [88, 85, 80, 75, 72, 90],
  },
  {
    name: 'Frontend', icon: '🎨',
    items: ['React', 'Vite', 'HTML / CSS'],
    levels: [90, 84, 90],
  },
  {
    name: 'Backend', icon: '⚙️',
    items: ['Django', 'Django REST Framework', 'REST APIs', 'Node.js'],
    levels: [86, 83, 88, 68],
  },
  {
    name: 'Databases', icon: '🗄️',
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Firebase / Firestore'],
    levels: [82, 82, 78, 74, 78],
  },
  {
    name: 'Tools', icon: '🛠️',
    items: ['Git / GitHub', 'Firebase Auth', 'PayPal API', 'Pollinations AI API', 'IBM Watson'],
    levels: [88, 78, 70, 72, 68],
  },
  {
    name: 'CS Foundations', icon: '🧠',
    items: ['Data Structures & Algorithms', 'DBMS', 'Machine Learning (Ensemble)', 'Random Forest / Gradient Boost'],
    levels: [85, 84, 72, 68],
  },
]

export default function Skills() {
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className="section border-t border-border">
      <div className="container">
        <p className="section-label">Skills & Stack</p>
        <h2 className="section-title">Technologies I <em>ship with</em></h2>
        <p className="section-sub">
          From CS fundamentals to modern frameworks — the full stack I bring to every project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] gap-3.5">

          {/* Tab list */}
          <div className="flex flex-col gap-0.5">
            {groups.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-2.5 px-3 py-[11px] rounded-lg cursor-pointer
                            text-left transition-all duration-200 border
                            ${active === i
                              ? 'bg-accent/10 border-accent/25 text-accent'
                              : 'bg-transparent border-transparent text-text-2 hover:bg-white/[0.03] hover:border-border'
                            }`}
              >
                <span className="text-[0.95rem]">{g.icon}</span>
                <span className={`text-[0.86rem] ${active === i ? 'font-semibold font-display' : 'font-normal'}`}>
                  {g.name}
                </span>
                {active === i && (
                  <span className="ml-auto text-accent text-[0.85rem]">›</span>
                )}
              </button>
            ))}
          </div>

          {/* Content panel */}
          <div className="bg-card border border-border rounded-xl p-7">
            <div className="flex items-center gap-2.5 mb-6">
              <span className="text-xl">{groups[active].icon}</span>
              <h3 className="font-display text-xl font-bold">{groups[active].name}</h3>
              <span className="text-[0.68rem] text-text-3 font-mono">
                {groups[active].items.length} skills
              </span>
            </div>

            <div className="flex flex-col gap-4">
              {groups[active].items.map((item, j) => (
                <SkillBar key={item} item={item} level={groups[active].levels[j]} />
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-border flex flex-wrap gap-1.5">
              {groups[active].items.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillBar({ item, level }) {
  const [ready, setReady] = React.useState(false)
  React.useEffect(() => {
    const t = setTimeout(() => setReady(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-[0.875rem] font-medium text-text">{item}</span>
        <span className="text-[0.7rem] font-mono text-text-3">{level}%</span>
      </div>
      <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: ready ? `${level}%` : '0%',
            background: 'linear-gradient(90deg, #e8673c, #f08050)',
          }}
        />
      </div>
    </div>
  )
}
