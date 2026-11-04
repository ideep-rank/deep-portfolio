'use client'
import { useEffect, useState } from 'react'
import { LogoD } from '@/components/LogoD'
import { IconArrowRight } from '@/components/Icons'

const NAV_ITEMS = [
  { href: '#journey',    label: 'The Journey' },
  { href: '#work',       label: 'Work' },
  { href: '#services',   label: 'Services' },
  { href: '#stack',      label: 'Tech Stack' },
  { href: '#process',    label: 'Process' },
  { href: '#experience', label: 'Experience' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('#hero')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = document.querySelectorAll<HTMLElement>('section[id], div[id]')
      sections.forEach(sec => {
        const top = sec.offsetTop - 120
        if (window.scrollY >= top && window.scrollY < top + sec.offsetHeight) {
          setActive('#' + sec.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="site-header">
        <div className="container">
          <div className="header-inner">
            <a href="#hero" className="header-logo" aria-label="Deep Rank — Home">
              <LogoD size={38} />
              <span className="logo-name">Deep Rank</span>
            </a>

            <nav className="nav-area" aria-label="Primary Navigation">
              <div className="nav-glass-pill" />
              <ul className="nav-menu" id="nav-menu">
                {NAV_ITEMS.map(item => (
                  <li key={item.href} className={active === item.href ? 'active' : ''}>
                    <a href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="header-actions">
              <a href="#contact" className="btn btn-primary" style={{ padding: '0.65rem 1.4rem', fontSize: '0.75rem' }}>
                <span>Let&apos;s Talk</span>
                <IconArrowRight size={13} strokeWidth={2.2} />
              </a>

              <button
                type="button"
                className="hamburger-btn"
                aria-expanded={mobileOpen}
                aria-label="Toggle navigation menu"
                onClick={() => setMobileOpen(o => !o)}
              >
                <span style={mobileOpen ? { transform: 'translateY(7px) rotate(45deg)' } : {}} />
                <span style={mobileOpen ? { opacity: 0 } : {}} />
                <span style={mobileOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`}>
        <button
          type="button"
          className="mobile-menu-close"
          aria-label="Close navigation"
          onClick={() => setMobileOpen(false)}
        >
          &times;
        </button>
        {NAV_ITEMS.map(item => (
          <a
            key={item.href}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ marginTop: '1rem', width: '220px' }}
          onClick={() => setMobileOpen(false)}
        >
          <span>Let&apos;s Connect</span>
          <IconArrowRight size={14} strokeWidth={2.2} />
        </a>
      </div>
    </>
  )
}
