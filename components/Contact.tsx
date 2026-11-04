import {
  IconBriefcase,
  IconGitHub,
  IconLocation,
  IconArrowRight,
} from '@/components/Icons'

export function Contact() {
  return (
    <section id="contact" className="block dark contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head center reveal">
          <div className="eyebrow">Get in Touch</div>
          <h2>
            Open for <span className="gold">Technical</span> Discussions
          </h2>
          <p>
            Whether you want to discuss scalable web architecture, modern Next.js &amp; WordPress engineering, exchange ideas, or explore new career opportunities — feel free to connect.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="contact-cards-grid">
          {/* Card 1: Professional Network (LinkedIn - Featured) */}
          <div className="contact-card contact-card--featured reveal">
            <div className="contact-card-top">
              <span className="contact-card-chip">Primary Channel</span>
              <div className="contact-card-icon" aria-hidden="true">
                <IconBriefcase size={22} />
              </div>
            </div>

            <h3>LinkedIn</h3>
            <a
              href="https://linkedin.com/in/rankdeep18"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-val"
            >
              linkedin.com/in/rankdeep18
            </a>

            <p>
              Direct messaging for professional networking, engineering discussions, case studies, and career opportunities.
            </p>

            <div className="contact-card-meta">
              <span>4+ Years Production Experience · Verified Network</span>
            </div>

            <div className="contact-card-actions">
              <a
                href="https://linkedin.com/in/rankdeep18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.2rem', fontSize: '0.82rem', width: '100%', justifyContent: 'center' }}
              >
                <span>Connect on LinkedIn</span>
                <IconArrowRight size={15} strokeWidth={2.2} />
              </a>
            </div>
          </div>

          {/* Card 2: GitHub Code & Repos */}
          <div className="contact-card reveal reveal-delay-1">
            <div className="contact-card-top">
              <span className="contact-card-chip">Code &amp; Repos</span>
              <div className="contact-card-icon" aria-hidden="true">
                <IconGitHub size={22} />
              </div>
            </div>

            <h3>GitHub</h3>
            <a
              href="https://github.com/ideep-rank"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-val"
            >
              github.com/ideep-rank
            </a>

            <p>
              Inspect open-source repositories, system architecture patterns, this portfolio codebase, and recent engineering activity.
            </p>

            <div className="contact-card-meta">
              <span>Active Code Contributions · Next.js &amp; WordPress</span>
            </div>

            <div className="contact-card-actions">
              <a
                href="https://github.com/ideep-rank"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.2rem', fontSize: '0.82rem', width: '100%', justifyContent: 'center' }}
              >
                <span>View GitHub Profile</span>
                <IconArrowRight size={15} strokeWidth={2.2} />
              </a>
            </div>
          </div>

          {/* Card 3: Location & Remote Collaboration */}
          <div className="contact-card reveal reveal-delay-2">
            <div className="contact-card-top">
              <span className="contact-card-chip">Timezone &amp; Reach</span>
              <div className="contact-card-icon" aria-hidden="true">
                <IconLocation size={22} />
              </div>
            </div>

            <h3>Location &amp; Remote</h3>
            <span className="contact-card-val">
              Ahmedabad, India · IST (UTC+5:30)
            </span>

            <p>
              Seamless asynchronous and real-time collaboration with engineering teams across US, European, UK, and APAC timezones.
            </p>

            <div className="contact-card-meta">
              <div className="contact-live-beacon">
                <span className="contact-live-dot" />
                <span>Open to Global Remote Roles</span>
              </div>
            </div>

            <div className="contact-card-actions">
              <a
                href="https://linkedin.com/in/rankdeep18"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ padding: '0.65rem 1.2rem', fontSize: '0.82rem', width: '100%', justifyContent: 'center' }}
              >
                <span>Message on LinkedIn</span>
                <IconArrowRight size={15} strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
