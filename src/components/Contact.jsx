import React, { useState } from 'react'

const socials = [
  { label: 'Email',    value: 'sujilsubrahmanian2001@gmail.com', href: 'mailto:sujilsubrahmanian2001@gmail.com', icon: '✉️', color: '#e8673c' },
  { label: 'GitHub',   value: 'github.com/sujilsubrahmanian',    href: 'https://github.com/sujilsubrahmanian',   icon: '⌨️', color: '#9a9a90' },
  { label: 'LinkedIn', value: 'linkedin.com/in/sujil--s',         href: 'https://linkedin.com/in/sujil--s',       icon: '💼', color: '#4a90d9' },
  { label: 'Phone',    value: '+91 8139831540',                  href: 'tel:+918139831540',                      icon: '📞', color: '#3db88a' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent'

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:sujilsubrahmanian2001@gmail.com?subject=${subject}&body=${body}`
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section border-t border-border relative">
      <div className="absolute top-[20%] -right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(232,103,60,0.07) 0%, transparent 70%)' }} />

      <div className="container relative z-10">
        <p className="section-label">Contact</p>
        <h2 className="section-title">Let's build something <em>together</em></h2>
        <p className="section-sub">
          Open to full-time roles, collaborations, and interesting problems. Fill the form or reach out directly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">

          {/* Form */}
          <form onSubmit={submit} className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { id: 'name',  label: 'Your Name',  type: 'text',  placeholder: 'Your full name',  autoComplete: 'name'  },
                { id: 'email', label: 'Your Email',  type: 'email', placeholder: 'your@email.com',  autoComplete: 'email' },
              ].map((f) => (
                <div key={f.id}>
                  <label className="block text-[0.68rem] font-mono text-text-3 tracking-[0.12em]
                                    uppercase mb-2">
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    value={form[f.id]}
                    onChange={change}
                    required
                    placeholder={f.placeholder}
                    autoComplete={f.autoComplete}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg
                               text-text font-sans text-[0.9rem] outline-none
                               transition-colors duration-200
                               focus:border-accent/60 placeholder:text-text-3"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-[0.68rem] font-mono text-text-3 tracking-[0.12em] uppercase mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={change}
                required
                rows={5}
                placeholder="Tell me about your project, role, or opportunity..."
                className="w-full px-4 py-3 resize-y bg-card border border-border rounded-lg
                           text-text font-sans text-[0.9rem] outline-none
                           transition-colors duration-200
                           focus:border-accent/60 placeholder:text-text-3"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary self-start py-3 px-7 text-[0.9rem]"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Opening…' : 'Send Message →'}
            </button>

            {status === 'sent' && (
              <p className="text-[0.88rem] text-green -mt-2">
                ✓ Your email client will open pre-filled — just hit Send!
              </p>
            )}
          </form>

          {/* Info panel */}
          <div className="flex flex-col gap-2">
            {socials.map((s, i) => (
              <SocialCard key={i} s={s} />
            ))}

            <div className="mt-1.5 p-5 bg-accent/[0.04] border border-accent/25 rounded-xl">
              <p className="text-[0.88rem] text-text-2 leading-[1.7] mb-3.5">
                Looking for a <strong className="text-text">full-time role</strong> in full‑stack
                development, software engineering, or AI-adjacent positions.
              </p>
              <a
                href="mailto:sujilsubrahmanian2001@gmail.com"
                className="btn btn-primary w-full justify-center py-[11px] text-[0.85rem]"
              >
                Email Me Directly ✦
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialCard({ s }) {
  const [hovered, setHovered] = React.useState(false)
  return (
    <a
      href={s.href}
      target={s.href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      className="flex items-center gap-3.5 p-[15px_18px] bg-card border border-border
                 rounded-[10px] transition-all duration-200 no-underline"
      style={{
        borderColor: hovered ? `${s.color}45` : undefined,
        background: hovered ? `${s.color}08` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="text-xl w-8 text-center flex-shrink-0">{s.icon}</span>
      <div className="min-w-0">
        <div className="text-[0.65rem] font-mono text-text-3 tracking-[0.1em] uppercase">
          {s.label}
        </div>
        <div className="text-[0.82rem] text-text font-medium mt-0.5 overflow-hidden text-ellipsis whitespace-nowrap">
          {s.value}
        </div>
      </div>
      <span className="ml-auto text-text-3 text-[0.75rem] flex-shrink-0">↗</span>
    </a>
  )
}
