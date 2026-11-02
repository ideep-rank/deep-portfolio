import { IconMail, IconBriefcase, IconLocation, IconArrowRight } from '@/components/Icons'

export function Contact() {
  return (
    <section id="contact" className="block dark contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head center reveal">
          <div className="eyebrow">Initiate Collaboration</div>
          <h2>
            Got a <span className="gold">Project</span> in Mind?
          </h2>
          <p>
            Whether you need a custom theme, plugin, or full-stack web platform — let&apos;s build it together. Reach out directly through any of the channels below.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="contact-cards-grid">
          {/* Card 1: Direct Email Channel */}
          <div className="contact-card contact-card--featured reveal">
            <div className="contact-card-top">
              <span className="contact-card-chip">Primary Channel</span>
              <div className="contact-card-icon" aria-hidden="true">
                <IconMail size={22} />
              </div>
            </div>

            <h3>Direct Email</h3>
            <a href="mailto:rankdeep@gmail.com" className="contact-card-val">
              rankdeep@gmail.com
            </a>

            <p>
              Ideal for new builds, technical consulting, theme &amp; plugin engineering, and project proposals.
            </p>

            <div className="contact-card-meta">
              <span>Typically responds within 24 hours · NDA Friendly</span>
            </div>

            <div className="contact-card-actions">
              <a
                href="mailto:rankdeep@gmail.com"
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.2rem', fontSize: '0.82rem', width: '100%', justifyContent: 'center' }}
              >
                <span>Send Email</span>
                <IconArrowRight size={15} strokeWidth={2.2} />
              </a>
            </div>
          </div>

          {/* Card 2: Professional Network */}
          <div className="contact-card reveal reveal-delay-1">
            <div className="contact-card-top">
              <span className="contact-card-chip">Network</span>
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
              Connect for professional networking, mutual recommendations, retainer contracts, and case study discussions.
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

          {/* Card 3: Location & Timezone */}
          <div className="contact-card reveal reveal-delay-2">
            <div className="contact-card-top">
              <span className="contact-card-chip">Availability</span>
              <div className="contact-card-icon" aria-hidden="true">
                <IconLocation size={22} />
              </div>
            </div>

            <h3>Location &amp; Remote</h3>
            <span className="contact-card-val">
              Ahmedabad, India · IST (UTC+5:30)
            </span>

            <p>
              Seamless asynchronous and real-time collaboration with teams across US, European, UK, and APAC timezones.
            </p>

            <div className="contact-card-meta">
              <div className="contact-live-beacon">
                <span className="contact-live-dot" />
                <span>Available for New Projects</span>
              </div>
            </div>

            <div className="contact-card-actions">
              <a
                href="mailto:rankdeep@gmail.com?subject=Project%20Inquiry%20-%20Availability"
                className="btn btn-primary"
                style={{ padding: '0.65rem 1.2rem', fontSize: '0.82rem', width: '100%', justifyContent: 'center' }}
              >
                <span>Inquire Schedule</span>
                <IconArrowRight size={15} strokeWidth={2.2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
