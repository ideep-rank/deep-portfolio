import { services } from '@/data'
import { ServiceIcon } from '@/components/Icons'

export function Services() {
  return (
    <section id="services" className="block light">
      <div className="container">
        <div className="section-head center reveal">
          <div className="eyebrow">What I Do</div>
          <h2>
            End-to-End <span className="gold">WordPress</span> Development
          </h2>
          <p>
            From pixel-perfect Figma builds to complex custom plugins and WooCommerce stores.
          </p>
        </div>

        <div className="feature-grid">
          {services.map((item, index) => {
            const num = String(index + 1).padStart(2, '0')
            const delayClass = `reveal-delay-${(index % 3) + 1}`

            return (
              <div
                key={item.title}
                className={`feature-card reveal ${delayClass}`}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.4rem' }}>
                  <div className="feature-num" style={{ marginBottom: 0 }}>{num}</div>
                  <div style={{ color: 'var(--cosmic-gold-deep)', opacity: 0.85, display: 'flex', alignItems: 'center' }} aria-hidden="true">
                    <ServiceIcon index={index} size={24} />
                  </div>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
