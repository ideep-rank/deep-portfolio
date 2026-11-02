export function Marquee() {
  const items = [
    'Custom WordPress Architecture',
    'Custom Plugin Engineering',
    'Enterprise WooCommerce',
    'Webflow CMS Solutions',
    'Advanced ACF & CPT Schemas',
    'Core Web Vitals 90+',
    'Scalable REST APIs',
    'AI-Assisted Engineering',
  ]

  return (
    <div className="marquee-ribbon" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1, 2].map(copyIdx => (
          <span key={copyIdx} style={{ display: 'inline-flex', alignItems: 'center' }}>
            {items.map((item, idx) => (
              <span key={`${copyIdx}-${idx}`} className="marquee-item">
                <span>{item}</span>
                <span className="marquee-dot">✦</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
