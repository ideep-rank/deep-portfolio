'use client'

interface StackCard {
  num: string
  title: string
  desc: string
  tools: string[]
}

const STACK_CARDS: StackCard[] = [
  {
    num: '01',
    title: 'Backend Architecture',
    desc: 'Bespoke WordPress architectures, high-performance database schema design, and custom plugin engines built for longevity and high concurrency.',
    tools: ['PHP', 'MySQL', 'Advanced Custom Fields (ACF)', 'REST API', 'Custom Post Types'],
  },
  {
    num: '02',
    title: 'Frontend & UI Engineering',
    desc: 'Pixel-perfect, fluid visual implementations converted from Figma designs into ultra-responsive, accessible, and conversion-focused web platforms.',
    tools: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'jQuery', 'Elementor', 'WPBakery', 'Bootstrap'],
  },
  {
    num: '03',
    title: 'SEO & Performance Analytics',
    desc: 'Search-first technical architecture, clean OpenGraph & JSON-LD schema integrations, and conversion event tracking for sustained organic visibility.',
    tools: ['Yoast SEO', 'Rank Math SEO', 'Google Search Console', 'Google Analytics', 'Schema Markup', 'PageSpeed Insights'],
  },
  {
    num: '04',
    title: 'Performance & Security',
    desc: 'Sub-second Core Web Vitals tuning, object caching, asset tree-shaking, and multi-layer enterprise security protection against vulnerabilities.',
    tools: ['WP Rocket', 'LiteSpeed Cache', 'Redis Object Cache', 'Wordfence', 'WPS Hide Login', 'WP Activity Log', 'All-in-One Migration'],
  },
  {
    num: '05',
    title: 'AI-Assisted Workflows',
    desc: 'Leveraging cutting-edge AI models across predictive code generation, automated regression testing, rapid prototyping, and bug diagnostics.',
    tools: ['Claude', 'Codex', 'ChatGPT', 'Gemini'],
  },
  {
    num: '06',
    title: 'Cloud Hosting & DevOps',
    desc: 'Enterprise DNS routing, automated staging-to-production deployment pipelines, SSL/TLS orchestration, and multi-environment server scaling.',
    tools: ['WP-CLI', 'Git', 'Cloudflare', 'WPEngine', 'WafaiCloud', 'cPanel', 'FTP / SSH Deployments', 'Bluehost', 'GoDaddy'],
  },
]

export function TechStack() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    card.style.setProperty('--mouse-x', `${x}px`)
    card.style.setProperty('--mouse-y', `${y}px`)

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -4
    const rotateY = ((x - centerX) / centerX) * 4
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <section id="stack" className="block alt">
      <div className="container">
        <div className="section-head center reveal">
          <div className="eyebrow">Technical Stack</div>
          <h2>
            Tools <span className="gold">I Use</span>
          </h2>
          <p>
            Core technologies, frameworks, and workflows I leverage to build scalable production platforms.
          </p>
        </div>

        <div className="stack-matrix-grid">
          {STACK_CARDS.map((card, index) => {
            const delayClass = `reveal-delay-${(index % 3) + 1}`

            return (
              <div
                key={card.title}
                className={`stack-matrix-card tilt reveal ${delayClass}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <div className="tilt-glare" />
                <div className="stack-card-header">
                  <span className="stack-card-num">{card.num}</span>
                  <h3 className="stack-card-title">{card.title}</h3>
                </div>
                <p className="stack-card-desc">{card.desc}</p>
                <div className="stack-card-tags">
                  {card.tools.map(tool => (
                    <span key={tool} className="stack-tag-pill">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
