import { IconQuote } from '@/components/Icons'

export function Philosophy() {
  return (
    <section className="block dark quote-section">
      <div className="container">
        <div className="quote-card reveal">
          {/* Subtle Watermark Quote Mark in background */}
          <div className="quote-watermark" aria-hidden="true">
            <IconQuote size={180} />
          </div>

          {/* Eyebrow Pill */}
          <div className="quote-eyebrow">
            <span className="quote-eyebrow-star">✦</span>
            <span>Architectural Philosophy</span>
          </div>

          {/* Golden Quote Icon Badge */}
          <div className="quote-icon-badge" aria-hidden="true">
            <IconQuote size={26} />
          </div>

          {/* Quotation Body */}
          <blockquote className="quote-content">
            <p className="quote-statement">
              &ldquo;When building web platforms, I believe the <span className="quote-highlight">underlying architecture should work as hard as the business itself</span>. A truly scalable website isn&apos;t just a pretty facade — it is fast, secure, resilient under production traffic, and built so content teams <span className="quote-highlight">never feel held hostage by their own code</span>.&rdquo;
            </p>
          </blockquote>

          {/* Editorial Divider */}
          <div className="quote-divider" aria-hidden="true">
            <span className="quote-divider-line" />
            <span className="quote-divider-star">✦</span>
            <span className="quote-divider-line" />
          </div>

          {/* Author Attribution */}
          <div className="quote-author-meta">
            <span className="quote-author-name">Deep Rank</span>
            <span className="quote-author-title">Software Engineer &amp; Web Architect</span>
          </div>
        </div>
      </div>
    </section>
  )
}
