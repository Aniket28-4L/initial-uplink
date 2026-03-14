'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView as useFramerInView } from 'framer-motion'

// ─── Data ────────────────────────────────────────────────────────────────────

const SKILLS = [
  { name: 'Docker',          level: 82, cat: 'Containers' },
  { name: 'Git & GitHub',    level: 85, cat: 'Version Control' },
  { name: 'GitHub Actions',  level: 75, cat: 'CI/CD' },
  { name: 'Linux',           level: 78, cat: 'OS' },
  { name: 'Ansible',         level: 72, cat: 'Automation' },
  { name: 'JavaScript',      level: 74, cat: 'Programming' },
  { name: 'Kubernetes',      level: 70, cat: 'Orchestration' },
  { name: 'Java',            level: 72, cat: 'Programming' },
  { name: 'Bash / YAML',     level: 70, cat: 'Scripting' },
  { name: 'Terraform',       level: 68, cat: 'IaC' },
  { name: 'AWS',             level: 65, cat: 'Cloud' },
  { name: 'Jenkins',         level: 60, cat: 'CI/CD' },
]

const PROJECTS = [
  {
    title: 'Inventory Management System',
    period: 'Nov 2025 – Jan 2026',
    desc: 'Real-time inventory system with role-based access control, automated stock workflows, and analytical dashboards. Full DevOps pipeline applied.',
    stack: ['Angular', 'Node.js', 'MongoDB', 'Docker', 'Ansible', 'GitHub Actions'],
    highlights: [
      'Dockerized full-stack app for consistent dev/prod environments',
      'Automated infra setup using Ansible — reduced manual config',
      'CI/CD via GitHub Actions on every code push',
    ],
    github: 'https://github.com/Aniket28-4L/InventoryManagement',
    tag: 'DevOps + Fullstack',
  },
  {
    title: 'GetWork Platform',
    period: 'Mar 2025 – Apr 2025',
    desc: 'Service platform enabling users to discover verified professionals for household services. Role-based registration for professionals.',
    stack: ['Java', 'JDBC', 'MySQL', 'phpMyAdmin'],
    highlights: [
      'Role-based registration — professionals manage profiles and pricing',
      'Separate admin and user interfaces for service moderation',
      'Secure backend workflows for bookings and data management',
    ],
    github: 'https://github.com/Aniket28-4L/Get-Work-JDBC',
    tag: 'Backend + Database',
  },
]

const EXPERIENCE = [
  {
    role: 'Associate Trainee Intern',
    company: 'AdmitWorks',
    period: 'Jul 2025 – Nov 2025',
    type: 'Internship',
    points: [
      'Transformed workflows into AI-driven processes, improving efficiency',
      'Guided employees in adopting AI tools for automation and content',
      'Contributed to UI/UX design support for social media assets',
    ],
  },
  {
    role: 'Freelance Web Developer',
    company: 'Remote',
    period: 'Nov 2025 – Jan 2026',
    type: 'Freelance',
    points: [
      'Built end-to-end web applications for clients from scratch',
      'Ensured timely delivery with code quality and security best practices',
      'Communicated progress and provided post-delivery support',
    ],
  },
]

const CERTS = [
  { title: 'Career Essentials in Software Development', issuer: 'Microsoft & LinkedIn Learning' },
  { title: 'NPTEL — Cyber Security Practitioners',      issuer: 'NPTEL Online', score: '97%' },
  { title: 'NPTEL — IoT Practitioners',                 issuer: 'NPTEL Online', score: '76%' },
  { title: 'PL/SQL Programming',                        issuer: 'Infosys Springboard' },
  { title: 'Java Programming',                          issuer: 'Infosys Springboard' },
]

const NAV = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useSectionInView(id: string) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return { ref, visible }
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 }
    )
    NAV.map(n => n.toLowerCase()).forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(14,13,12,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-xs tracking-[0.2em] transition-colors"
          style={{ color: '#8b3a3a' }}
        >
          AP
        </button>
        <div className="hidden md:flex items-center gap-8">
          {NAV.map(n => (
            <button
              key={n}
              onClick={() => scrollTo(n.toLowerCase())}
              className="nav-link"
              style={{ color: active === n.toLowerCase() ? '#f0ece6' : '#5a5248' }}
            >
              {n}
            </button>
          ))}
        </div>
        <a href="mailto:aniketpandey4723k@gmail.com" className="btn-maroon text-xs py-2 px-4">
          Hire Me
        </a>
      </div>
    </nav>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  const [typed, setTyped] = useState('')
  const roles = ['DevOps Practitioner', 'Cloud Engineer', 'Automation Specialist']
  const roleIdx = useRef(0)
  const charIdx = useRef(0)
  const deleting = useRef(false)

  useEffect(() => {
    const tick = () => {
      const current = roles[roleIdx.current]
      if (!deleting.current) {
        charIdx.current++
        setTyped(current.slice(0, charIdx.current))
        if (charIdx.current === current.length) {
          deleting.current = true
          setTimeout(tick, 1800)
          return
        }
      } else {
        charIdx.current--
        setTyped(current.slice(0, charIdx.current))
        if (charIdx.current === 0) {
          deleting.current = false
          roleIdx.current = (roleIdx.current + 1) % roles.length
        }
      }
      setTimeout(tick, deleting.current ? 40 : 70)
    }
    const t = setTimeout(tick, 600)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <p className="section-label mb-4">Hello, I'm</p>

            <h1 className="font-serif mb-2" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1.05, color: '#f0ece6' }}>
              Aniket
            </h1>
            <h1 className="font-serif mb-6" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', lineHeight: 1.05, color: '#8b3a3a' }}>
              Pandey
            </h1>

            <div className="flex items-center gap-2 mb-6" style={{ minHeight: 28 }}>
              <span className="font-mono text-sm cursor-blink" style={{ color: '#9a9086' }}>{typed}</span>
            </div>

            <p className="text-sm leading-relaxed mb-8" style={{ color: '#5a5248', maxWidth: 380 }}>
              Automation-first mindset. I build pipelines, provision infrastructure, and ship reliable systems — reducing manual work one script at a time.
            </p>

            <div className="flex gap-3 flex-wrap mb-10">
              <button className="btn-maroon" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </button>
              <a href="mailto:aniketpandey4723k@gmail.com" className="btn-outline">
                Get in Touch
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8">
              {[
                { v: '8.40', l: 'CGPA' },
                { v: '8+',  l: 'Projects' },
                { v: '5+',   l: 'Certs' },
              ].map(s => (
                <div key={s.l}>
                  <div className="font-serif text-2xl" style={{ color: '#8b3a3a' }}>{s.v}</div>
                  <div className="font-mono text-[10px] mt-0.5" style={{ color: '#5a5248' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative" style={{ width: 320, height: 400 }}>
              {/* Decorative background block */}
              <div
                className="absolute"
                style={{
                  inset: 0,
                  top: 16, left: 16,
                  background: 'var(--surface)',
                  border: '1px solid rgba(139,58,58,0.2)',
                  borderRadius: 4,
                }}
              />
              {/* Maroon accent corner */}
              <div className="absolute" style={{
                width: 48, height: 48,
                top: -4, right: -4,
                borderTop: '2px solid #8b3a3a',
                borderRight: '2px solid #8b3a3a',
                borderRadius: '0 4px 0 0',
              }} />
              <div className="absolute" style={{
                width: 48, height: 48,
                bottom: 20, left: 12,
                borderBottom: '2px solid #8b3a3a',
                borderLeft: '2px solid #8b3a3a',
                borderRadius: '0 0 0 4px',
              }} />

              {/* Photo */}
              <div className="photo-frame absolute" style={{ inset: 0, top: 8, left: 8, borderRadius: 4 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/aniket.jpg"
                  alt="Aniket Pandey"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-4 card px-3 py-2"
                style={{ zIndex: 10 }}
              >
                <div className="font-mono text-[10px]" style={{ color: '#5a5248' }}>Status</div>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 4px #4ade80' }} />
                  <span className="font-mono text-[11px]" style={{ color: '#f0ece6' }}>Available</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// ─── About ───────────────────────────────────────────────────────────────────

function About() {
  const { ref, visible } = useSectionInView('about')

  return (
    <section id="about" ref={ref as any} className={`py-28 fade-section ${visible ? 'visible' : ''}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="divider mb-16" />
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="section-label mb-3">About</p>
            <h2 className="font-serif text-3xl" style={{ color: '#f0ece6' }}>
              Who I am
            </h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-sm leading-[1.9]" style={{ color: '#9a9086' }}>
              I'm a B.Tech Computer Engineering student at RK University, Rajkot, graduating May 2026 with a CGPA of 8.40. My focus is DevOps — building the bridge between development and production through automation, containers, and cloud infrastructure.
            </p>
            <p className="text-sm leading-[1.9]" style={{ color: '#9a9086' }}>
              I believe every manual process is a problem waiting to be automated. Whether it's a CI/CD pipeline, an Ansible playbook, or a Dockerized deployment — I build systems that run reliably without hand-holding.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { k: 'Location',  v: 'Rajkot, Gujarat' },
                { k: 'Education', v: 'B.Tech CE, RK University' },
                { k: 'Email',     v: 'aniketpandey4723k@gmail.com' },
                { k: 'GitHub',    v: 'Aniket28-4L' },
              ].map(item => (
                <div key={item.k}>
                  <div className="font-mono text-[10px] mb-1" style={{ color: '#5a5248' }}>{item.k}</div>
                  <div className="text-sm" style={{ color: '#f0ece6' }}>{item.v}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {['Teamwork', 'Leadership', 'Discipline', 'Perseverance', 'Work Ethic'].map(s => (
                <span key={s} className="tag">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Skills ──────────────────────────────────────────────────────────────────

function SkillBar({ name, level, cat, animate }: { name: string; level: number; cat: string; animate: boolean }) {
  const [width, setWidth] = useState(0)
  useEffect(() => { if (animate) setTimeout(() => setWidth(level), 200) }, [animate, level])

  return (
    <div className="group">
      <div className="flex justify-between items-baseline mb-1.5">
        <div>
          <span className="text-sm" style={{ color: '#f0ece6' }}>{name}</span>
          <span className="font-mono text-[9px] ml-2" style={{ color: '#5a5248' }}>{cat}</span>
        </div>
        <span className="font-mono text-[10px]" style={{ color: '#8b3a3a' }}>{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

function Skills() {
  const { ref, visible } = useSectionInView('skills')

  return (
    <section id="skills" ref={ref as any} className={`py-28 fade-section ${visible ? 'visible' : ''}`}
      style={{ background: 'var(--surface)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="section-label mb-3">Expertise</p>
            <h2 className="font-serif text-3xl mb-4" style={{ color: '#f0ece6' }}>Tech Stack</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#5a5248' }}>
              Core tools I use to build, automate, and ship infrastructure.
            </p>
            <div className="divider-maroon mt-8" style={{ maxWidth: 60 }} />
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {SKILLS.map(s => (
              <SkillBar key={s.name} {...s} animate={visible} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Projects ────────────────────────────────────────────────────────────────

function Projects() {
  const { ref, visible } = useSectionInView('projects')

  return (
    <section id="projects" ref={ref as any} className={`py-28 fade-section ${visible ? 'visible' : ''}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="divider mb-16" />
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="section-label mb-3">Work</p>
            <h2 className="font-serif text-3xl mb-4" style={{ color: '#f0ece6' }}>Projects</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#5a5248' }}>
              Things I've built and shipped.
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="card p-6"
              >
                <div className="flex items-start justify-between flex-wrap gap-3 mb-3">
                  <div>
                    <h3 className="font-serif text-xl mb-0.5" style={{ color: '#f0ece6' }}>{p.title}</h3>
                    <span className="font-mono text-[10px]" style={{ color: '#5a5248' }}>{p.period}</span>
                  </div>
                  <span className="tag tag-maroon">{p.tag}</span>
                </div>

                <p className="text-sm leading-relaxed mb-4" style={{ color: '#9a9086' }}>{p.desc}</p>

                <ul className="space-y-1 mb-5">
                  {p.highlights.map(h => (
                    <li key={h} className="flex gap-2 text-sm" style={{ color: '#5a5248' }}>
                      <span style={{ color: '#8b3a3a', flexShrink: 0 }}>→</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map(s => <span key={s} className="tag text-[10px]">{s}</span>)}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] transition-colors"
                    style={{ color: '#5a5248' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#8b3a3a')}
                    onMouseLeave={e => (e.currentTarget.style.color = '#5a5248')}
                  >
                    GitHub →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Experience ──────────────────────────────────────────────────────────────

function Experience() {
  const { ref, visible } = useSectionInView('experience')

  return (
    <section id="experience" ref={ref as any} className={`py-28 fade-section ${visible ? 'visible' : ''}`}
      style={{ background: 'var(--surface)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="section-label mb-3">Journey</p>
            <h2 className="font-serif text-3xl mb-4" style={{ color: '#f0ece6' }}>Experience</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#5a5248' }}>
              Where I've worked and what I've built.
            </p>
            <div className="divider-maroon mt-8" style={{ maxWidth: 60 }} />
          </div>
          <div className="md:col-span-2">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-[3px] top-2 bottom-2 w-px" style={{ background: 'rgba(139,58,58,0.2)' }} />
              <div className="space-y-10">
                {EXPERIENCE.map((e, i) => (
                  <motion.div
                    key={e.company}
                    initial={{ opacity: 0, x: 20 }}
                    animate={visible ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="pl-8 relative"
                  >
                    <div className="timeline-dot absolute left-0 top-1.5" />
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <div>
                        <h3 className="font-sans font-semibold text-base" style={{ color: '#f0ece6' }}>{e.role}</h3>
                        <span className="font-mono text-[11px]" style={{ color: '#8b3a3a' }}>{e.company}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-mono text-[10px]" style={{ color: '#5a5248' }}>{e.period}</div>
                        <div className="tag tag-maroon mt-1 text-[9px]">{e.type}</div>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {e.points.map(p => (
                        <li key={p} className="flex gap-2 text-sm" style={{ color: '#5a5248' }}>
                          <span style={{ color: '#8b3a3a', flexShrink: 0 }}>·</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}

                {/* Education */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="pl-8 relative"
                >
                  <div className="timeline-dot absolute left-0 top-1.5" style={{ background: '#5a5248' }} />
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div>
                      <h3 className="font-sans font-semibold text-base" style={{ color: '#f0ece6' }}>B.Tech — Computer Engineering</h3>
                      <span className="font-mono text-[11px]" style={{ color: '#8b3a3a' }}>RK University, Rajkot</span>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[10px]" style={{ color: '#5a5248' }}>2022 – May 2026</div>
                      <div className="font-mono text-[11px] mt-0.5" style={{ color: '#8b3a3a' }}>CGPA 8.40</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Certs */}
            <div className="mt-12">
              <p className="section-label mb-4">Certifications</p>
              <div className="space-y-2">
                {CERTS.map(c => (
                  <div key={c.title} className="flex items-center justify-between py-3 border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                    <div>
                      <div className="text-sm" style={{ color: '#f0ece6' }}>{c.title}</div>
                      <div className="font-mono text-[10px] mt-0.5" style={{ color: '#5a5248' }}>{c.issuer}</div>
                    </div>
                    {c.score && (
                      <span className="font-mono text-sm" style={{ color: '#8b3a3a' }}>{c.score}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Contact ─────────────────────────────────────────────────────────────────

function Contact() {
  const { ref, visible } = useSectionInView('contact')
  const [copied, setCopied] = useState('')

  const copy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(''), 2000)
  }

  return (
    <section id="contact" ref={ref as any} className={`py-28 fade-section ${visible ? 'visible' : ''}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="divider mb-16" />
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="section-label mb-3">Let's talk</p>
            <h2 className="font-serif text-3xl mb-4" style={{ color: '#f0ece6' }}>Get in Touch</h2>
            <p className="text-sm leading-relaxed" style={{ color: '#5a5248' }}>
              Open to DevOps roles, internships, and freelance cloud infrastructure work.
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="space-y-3 mb-8">
              {[
                { label: 'Email',    value: 'aniketpandey4723k@gmail.com', href: 'mailto:aniketpandey4723k@gmail.com' },
                { label: 'Phone',    value: '+91 7984266324',               href: 'tel:+917984266324' },
                { label: 'LinkedIn', value: 'aniket-pandey-1b3a59291',      href: 'https://linkedin.com/in/aniket-pandey-1b3a59291' },
                { label: 'GitHub',   value: 'Aniket28-4L',                  href: 'https://github.com/Aniket28-4L' },
              ].map(item => (
                <div key={item.label} className="card p-4 flex items-center justify-between group">
                  <div>
                    <div className="font-mono text-[10px] mb-0.5" style={{ color: '#5a5248' }}>{item.label}</div>
                    <div className="text-sm" style={{ color: '#9a9086' }}>{item.value}</div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={item.href}
                      target="_blank" rel="noopener noreferrer"
                      className="btn-maroon py-1.5 px-3 text-xs"
                    >
                      Open
                    </a>
                    <button
                      onClick={() => copy(item.value, item.label)}
                      className="btn-outline py-1.5 px-3 text-xs"
                      style={{ color: copied === item.label ? '#4ade80' : '#5a5248', borderColor: copied === item.label ? 'rgba(74,222,128,0.3)' : undefined }}
                    >
                      {copied === item.label ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 card" style={{ borderColor: 'rgba(139,58,58,0.2)' }}>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#4ade80', boxShadow: '0 0 4px #4ade80' }} />
                <span className="font-mono text-[11px]" style={{ color: '#4ade80' }}>Available for opportunities</span>
              </div>
              <p className="font-mono text-[11px]" style={{ color: '#5a5248' }}>
                Based in Rajkot, Gujarat — open to remote & on-site roles across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="py-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between flex-wrap gap-4">
        <span className="font-mono text-[10px]" style={{ color: '#5a5248' }}>
          © 2025 Aniket Pandey
        </span>
        <span className="font-mono text-[10px]" style={{ color: '#5a5248' }}>
          DevOps Practitioner · Rajkot, India
        </span>
        <div className="flex gap-4">
          {[
            { l: 'GitHub',   h: 'https://github.com/Aniket28-4L' },
            { l: 'LinkedIn', h: 'https://linkedin.com/in/aniket-pandey-1b3a59291' },
          ].map(link => (
            <a key={link.l} href={link.h} target="_blank" rel="noopener noreferrer"
              className="font-mono text-[10px] transition-colors"
              style={{ color: '#5a5248' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#8b3a3a')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5a5248')}
            >
              {link.l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
