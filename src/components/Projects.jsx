import React, { useState } from 'react'

const projects = [
  {
    id: '01',
    title: 'AI-Based Hospital Booking System',
    subtitle: 'Full-Stack Healthcare Platform',
    desc: 'A full-stack hospital appointment platform where patients register, search doctors, book time slots, and pay via PayPal. Features Firebase Authentication with role-based dashboards for patients, admins, and super-admins. Firestore used as the real-time NoSQL database. Integrated an AI chatbot (Pollinations API) for symptom-based medical guidance.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    tags: ['React', 'Vite', 'Firebase', 'Firestore', 'PayPal API', 'Pollinations AI', 'Firebase Auth'],
    github: 'https://github.com/sujilsubrahmanian',
    live: 'https://ai-based-hospital-booking-system.vercel.app',
    highlights: ['AI Chatbot (Pollinations API)', 'Role-Based Auth', 'PayPal Gateway', 'Real-time Firestore DB', 'Admin Panel'],
  },
  {
    id: '02',
    title: 'Autism Detection System',
    subtitle: 'ML-Powered Diagnostic Tool',
    desc: 'Led frontend development with React + Vite, building a responsive and accessible user interface. Collaborated on the backend with Django and PostgreSQL, integrating an ensemble ML model (Random Forest + Gradient Boost Classifier) via Django REST Framework APIs to predict autism with high accuracy.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
    tags: ['React', 'Vite', 'Django', 'PostgreSQL', 'Random Forest', 'Gradient Boost', 'DRF'],
    github: 'https://github.com/sujilsubrahmanian',
    live: null,
    highlights: ['Ensemble ML Model', 'Django REST APIs', 'PostgreSQL Backend', 'Responsive UI'],
  },
  {
    id: '03',
    title: 'AI Diet Plan Chatbot',
    subtitle: 'IBM Watson NLP Assistant',
    desc: 'Conversational AI built on IBM Watson Assistant using NLP to deliver personalised diet recommendations based on user inputs, preferences, and health goals. Demonstrates practical cloud-based AI integration with a clean conversational interface.',
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&q=80',
    tags: ['IBM Watson', 'NLP', 'AI', 'Chatbot', 'Cloud', 'IBM Skills Build'],
    github: null,
    live: 'https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html',
    highlights: ['IBM Watson NLP', 'Personalised Recommendations', 'Live Demo Available', 'IBM Certificate'],
  },
]

export default function Projects() {
  const [hov, setHov] = useState(null)

  return (
    <section id="projects" className="section border-t border-border">
      <div className="container">
        <p className="section-label">Work</p>
        <h2 className="section-title">Projects I've <em>built</em></h2>
        <p className="section-sub">
          Real applications I've designed, engineered, and shipped — spanning healthcare AI,
          ML diagnostics, and NLP chatbots.
        </p>

        <div className="flex flex-col gap-0.5">
          {projects.map((p, i) => (
            <div
              key={p.id}
              onMouseEnter={() => setHov(i)}
              onMouseLeave={() => setHov(null)}
              className={`grid grid-cols-1 md:grid-cols-[1fr_300px] overflow-hidden bg-card
                          border transition-all duration-[220ms] ease-out
                          ${i === 0 ? 'rounded-[12px_12px_3px_3px]'
                            : i === projects.length - 1 ? 'rounded-[3px_3px_12px_12px]'
                            : 'rounded-sm'}
                          ${hov === i
                            ? 'border-border-2 -translate-y-0.5 shadow-[0_14px_36px_rgba(0,0,0,0.5)]'
                            : 'border-border'}`}
            >
              {/* Text content */}
              <div className="p-7 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="font-mono text-[0.62rem] tracking-[0.12em] uppercase
                                     text-accent bg-accent/10 border border-accent/25
                                     rounded-[5px] px-2 py-[3px]">
                      {p.subtitle}
                    </span>
                    <span className="font-mono text-[0.62rem] text-text-3">{p.id}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold tracking-[-0.01em] mb-2.5
                                  leading-snug text-text">
                    {p.title}
                  </h3>

                  <p className="text-[0.87rem] text-text-2 leading-[1.78] mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t border-border mt-4">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer"
                       className="btn btn-ghost py-[7px] px-4 text-[0.8rem]">
                      <GhIcon /> GitHub
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer"
                       className="btn btn-primary py-[7px] px-4 text-[0.8rem]">
                      Live Demo ↗
                    </a>
                  )}
                  {!p.github && !p.live && (
                    <span className="text-[0.75rem] text-text-3 font-mono self-center">
                      Private repository
                    </span>
                  )}
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden min-h-[220px]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-all duration-400"
                  style={{
                    filter: hov === i ? 'brightness(0.7) saturate(1.1)' : 'brightness(0.4) saturate(0.4)',
                    transform: hov === i ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4"
                     style={{ background: 'linear-gradient(to top, rgba(12,12,12,0.75) 0%, transparent 55%)' }}>
                  {p.highlights.map((h) => (
                    <span key={h}
                          className="text-[0.7rem] text-white/80 font-mono flex items-center gap-1.5 leading-[1.9]">
                      <span className="w-[5px] h-[5px] rounded-full bg-accent flex-shrink-0" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="https://github.com/sujilsubrahmanian" target="_blank" rel="noreferrer"
             className="btn btn-outline">
            View all on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}

function GhIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  )
}
