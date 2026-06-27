import React, { useState } from 'react'

const links = [
  { label: 'About',     href: '#about'     },
  { label: 'Skills',    href: '#skills'    },
  { label: 'Projects',  href: '#projects'  },
  { label: 'Education', href: '#education' },
  { label: 'Contact',   href: '#contact'   },
]

export default function Navbar({ scrollY }) {
  const [open, setOpen] = useState(false)
  const solid = scrollY > 50

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'py-3.5 bg-black/[0.92] backdrop-blur-xl border-b border-border'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#hero">
          <span className="font-display text-xl font-extrabold text-text tracking-tight">
            SUJIL <span className="text-accent">S</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5 list-none">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm font-normal text-text-2 px-3 py-1.5 rounded-lg
                           transition-all duration-200
                           hover:text-text hover:bg-white/[0.05]"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-1.5">
            <a
              href="mailto:sujilsubrahmanian2001@gmail.com"
              className="btn btn-primary py-2 px-4 text-[0.82rem]"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] bg-transparent border-0 cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-[22px] h-0.5 bg-text rounded-sm transition-all duration-250"
              style={{
                transform: open
                  ? i === 0
                    ? 'translateY(7px) rotate(45deg)'
                    : i === 1
                    ? 'scaleX(0)'
                    : 'translateY(-7px) rotate(-45deg)'
                  : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div className="fixed inset-0 bg-bg/[0.98] flex flex-col items-center justify-center gap-7 z-40 animate-slide-down">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-3xl font-bold text-text font-display tracking-tight"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:sujilsubrahmanian2001@gmail.com"
            className="btn btn-primary mt-2"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  )
}
