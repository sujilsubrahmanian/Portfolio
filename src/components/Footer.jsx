import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-border py-7">
      <div className="container flex items-center justify-between flex-wrap gap-4">
        <span className="font-display text-[1.1rem] font-extrabold text-text tracking-tight">
          SUJIL <span className="text-accent">S</span>
        </span>
        <span className="text-[0.75rem] text-text-3 font-mono">
          © {new Date().getFullYear()} Sujil S · Built with React & Tailwind · Kerala, India
        </span>
        <div className="flex gap-4">
          {[
            { l: 'GitHub',   h: 'https://github.com/sujilsubrahmanian' },
            { l: 'LinkedIn', h: 'https://linkedin.com/in/sujil--s'      },
            { l: 'Email',    h: 'mailto:sujilsubrahmanian2001@gmail.com' },
          ].map(({ l, h }) => (
            <a
              key={l}
              href={h}
              target={h.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="text-[0.78rem] text-text-3 transition-colors duration-200 hover:text-text"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
