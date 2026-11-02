import Image from 'next/image'
import { IconArrowRight } from '@/components/Icons'

export function Journey() {
  return (
    <section id="journey" className="block light">
      <div className="container">
        <div className="split-journey">
          <div className="reveal">
            <div className="eyebrow">The Engineering Approach</div>
            <h2 className="journey-heading">
              Engineering digital platforms that drive <span className="gold">measurable growth</span>.
            </h2>
            <p className="journey-intro">
              I build web platforms that do far more than look impressive — they load instantly,
              convert high-intent traffic, and remain effortless for your team to operate without developer bottlenecks.
            </p>

            <div className="num-list">
              <div className="num-item">
                <div className="num-badge">01</div>
                <div className="num-body">
                  <h3>Modular Content Architecture</h3>
                  <p>
                    Custom post types (CPTs) and structured ACF field hierarchies designed so marketing teams
                    and editors manage complex content without touching code or breaking layouts.
                  </p>
                </div>
              </div>

              <div className="num-item">
                <div className="num-badge">02</div>
                <div className="num-body">
                  <h3>Performance &amp; Conversion Speed</h3>
                  <p>
                    Audited for Core Web Vitals to deliver 90+ PageSpeed scores, zero asset bloat, optimized
                    database queries, and frictionless user flows that maximize conversions.
                  </p>
                </div>
              </div>

              <div className="num-item">
                <div className="num-badge">03</div>
                <div className="num-body">
                  <h3>Maintainable Code Standards</h3>
                  <p>
                    Written strictly with WordPress Core APIs, custom hooks, and semantic PHP — documented so any
                    engineering team can seamlessly maintain and scale it in production.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal reveal-delay-1">
            <div className="journey-frame">
              <Image
                src="/deep-main.webp"
                alt="Deep Rank — Software Engineer working at desk"
                width={600}
                height={600}
                priority={false}
                style={{ borderRadius: '10px', objectFit: 'cover' }}
              />
              <div
                style={{
                  marginTop: '1.25rem',
                  padding: '1rem',
                  borderTop: '1px solid var(--cosmic-paper-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.75rem',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '1.18rem', textTransform: 'none', letterSpacing: '-0.01em', color: 'var(--text-dark)', fontWeight: 700 }}>
                    Deep Rank
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-dark-sub)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                    Software Engineer · Ahmedabad, India
                  </div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--cosmic-gold-deep)', fontWeight: 600, marginTop: '2px' }}>
                    B.E. in Information Technology (8.03 CGPA)
                  </div>
                </div>
                <a href="#experience" className="btn btn-outline" style={{ padding: '0.55rem 1.1rem', fontSize: '0.75rem' }}>
                  <span>View Career</span>
                  <IconArrowRight size={14} strokeWidth={2.2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
