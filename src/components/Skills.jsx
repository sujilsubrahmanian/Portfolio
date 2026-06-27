import React, { useState, useEffect } from 'react'

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
    items: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'Firebase'],
    levels: [82, 82, 78, 74, 78],
  },
  {
    name: 'Tools', icon: '🛠️',
    items: ['Git / GitHub', 'Firebase Auth', 'PayPal API', 'Pollinations AI', 'IBM Watson'],
    levels: [88, 78, 70, 72, 68],
  },
  {
    name: 'CS Foundations', icon: '🧠',
    items: ['Data Structures', 'DBMS', 'Machine Learning', 'Random Forest'],
    levels: [85, 84, 72, 68],
  },
]

export default function Skills() {
  const [active, setActive] = useState(0)

  return (
    <section id="skills" className="section border-t border-white/10">
      <div className="container">

        <p className="section-label">Skills & Stack</p>
        <h2 className="section-title">Technologies I <em>ship with</em></h2>
        <p className="section-sub">
          From CS fundamentals to modern frameworks — the full stack I bring to every project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4">

          {/* Tab buttons on the left */}
          <div className="flex flex-col gap-1">
            {groups.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer text-left transition-all duration-200 border ${
                  active === i
                    ? 'bg-accent/10 border-accent/25 text-accent'
                    : 'bg-transparent border-transparent text-text-2 hover:bg-white/5 hover:border-white/10'
                }`}
              >
                <span className="text-base">{g.icon}</span>
                <span className={`text-sm ${active === i ? 'font-semibold' : 'font-normal'}`}>
                  {g.name}
                </span>
                {active === i && (
                  <span className="ml-auto text-accent text-sm">›</span>
                )}
              </button>
            ))}
          </div>

          {/* Skill bars on the right */}
          <div className="bg-card border border-white/10 rounded-xl p-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{groups[active].icon}</span>
              <h3 className="font-display text-xl font-bold text-white">{groups[active].name}</h3>
              <span className="text-xs text-text-3 font-mono">{groups[active].items.length} skills</span>
            </div>

            <div className="flex flex-col gap-5">
              {groups[active].items.map((item, j) => (
                <SkillBar key={item} item={item} level={groups[active].levels[j]} />
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2">
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
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 50)
    return () => clearTimeout(t)
  }, [item])

  return (
    <div>
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-white">{item}</span>
        <span className="text-xs font-mono text-text-3">{level}%</span>
      </div>
      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
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