import React, { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false)
  const solid = scrollY > 50

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solid ? 'py-3 bg-black/90 backdrop-blur-xl border-b border-white/10' : 'py-5 bg-transparent'}`}>
      <div className="container flex items-center justify-between">
        <a href="#hero">
          <span className="font-display text-xl font-extrabold tracking-tight text-white">
            SUJIL <span className="text-accent">S</span>
          </span>
        </a>
        <ul className="hidden md:flex items-center gap-1 list-none">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-sm text-text-2 px-3 py-1.5 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/5">
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href="#contact" className="btn btn-primary py-2 px-4 text-xs">Hire Me</a>
          </li>
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-1.5 bg-transparent border-0 cursor-pointer p-1">
          <span className="block w-6 h-0.5 bg-white rounded-sm" />
          <span className="block w-6 h-0.5 bg-white rounded-sm" />
          <span className="block w-6 h-0.5 bg-white rounded-sm" />
        </button>
      </div>
      {open && (
        <div className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 z-40">
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-3xl font-bold text-white">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={() => setOpen(false)}>Hire Me</a>
        </div>
      )}
    </nav>
  )
}