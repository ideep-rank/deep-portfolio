import { LogoD } from '@/components/LogoD'
import { IconLocation, IconArrowRight } from '@/components/Icons'

export function Footer() {
  const NAV = [
    { href: '#journey',    label: 'The Journey' },
    { href: '#work',       label: 'Work' },
    { href: '#services',   label: 'Services' },
    { href: '#stack',      label: 'Tech Stack' },
    { href: '#process',    label: 'Process' },
    { href: '#experience', label: 'Experience' },
  ]

  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a href="#hero" className="header-logo" style={{ textDecoration: 'none' }}>
                <LogoD size={38} />
                <span className="logo-name">Deep Rank</span>
              </a>
              <p className="footer-tagline">
                Software Engineer with 4+ years of experience building scalable production WordPress platforms with end-to-end ownership from requirements to deployment.
              </p>
            </div>

            <div className="footer-contact-block">
              <div className="footer-email">
                <a href="mailto:rankdeep@gmail.com">rankdeep@gmail.com</a>
              </div>
              <div className="footer-location">
                <IconLocation size={14} style={{ display: 'inline-block', verticalAlign: '-2px', marginRight: '6px', color: 'var(--cosmic-gold-light)' }} />
                Ahmedabad, Gujarat, India · Available Globally for Remote Projects
              </div>
              <div className="footer-social-links">
                <a
                  href="https://linkedin.com/in/rankdeep18"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--cosmic-gold-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>LinkedIn</span>
                  <IconArrowRight size={13} strokeWidth={2.2} />
                </a>
                <a
                  href="mailto:rankdeep@gmail.com"
                  style={{ color: 'var(--cosmic-gold-light)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Email</span>
                  <IconArrowRight size={13} strokeWidth={2.2} />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>&copy; {new Date().getFullYear()} Deep Rank. All rights reserved.</span>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
              {NAV.map(n => (
                <a key={n.href} href={n.href} style={{ color: 'var(--text-light-sub)', fontSize: '0.78rem' }}>
                  {n.label}
                </a>
              ))}
            </div>
            <span>Built with Next.js &amp; Architectural Precision ✦</span>
          </div>
        </div>
      </footer>

      {/* LinkedIn Floating Action Button */}
      <a
        className="linkedin-fab"
        href="https://linkedin.com/in/rankdeep18"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Deep Rank on LinkedIn"
      >
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      </a>
    </>
  )
}
