'use client'

import { useState } from 'react'
import {
  IconMail,
  IconBriefcase,
  IconGitHub,
  IconArrowRight,
  IconCopy,
  IconCheck,
} from '@/components/Icons'

export function Contact() {
  const [copied, setCopied] = useState(false)

  // Assembled at runtime to prevent automated crawlers from parsing raw mailto links in static HTML
  const emailUser = 'rankdeep'
  const emailDomain = 'gmail.com'
  const fullEmail = `${emailUser}@${emailDomain}`

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(fullEmail).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2500)
      })
    }
  }

  const handleOpenMail = () => {
    window.location.href = `mailto:${fullEmail}?subject=Hello%20Deep%20-%20Engineering%20Inquiry`
  }

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
              href="https://github.com/rankdeep"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card-val"
            >
              github.com/rankdeep
            </a>

            <p>
              Inspect open-source repositories, system architecture patterns, this portfolio codebase, and recent engineering activity.
            </p>

            <div className="contact-card-meta">
              <span>Active Code Contributions · Next.js &amp; WordPress</span>
            </div>

            <div className="contact-card-actions">
              <a
                href="https://github.com/rankdeep"
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

          {/* Card 3: Direct Email (Protected against scrapers) */}
          <div className="contact-card reveal reveal-delay-2">
            <div className="contact-card-top">
              <span className="contact-card-chip">Direct Inquiries</span>
              <div className="contact-card-icon" aria-hidden="true">
                <IconMail size={22} />
              </div>
            </div>

            <h3>Email</h3>
            <button
              type="button"
              onClick={handleCopyEmail}
              className="contact-card-val"
              title="Click to copy email"
              style={{
                background: 'none',
                border: 'none',
                padding: 0,
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: 'inherit',
              }}
            >
              {copied ? 'rankdeep@gmail.com (Copied! ✓)' : 'rankdeep [at] gmail [dot] com'}
            </button>

            <p>
              Preferred for formal correspondence, tech inquiries, or reaching out directly without social media platforms.
            </p>

            <div className="contact-card-meta">
              <span>{copied ? '✓ Copied to clipboard' : 'Spam-protected · Typically responds in 24h'}</span>
            </div>

            <div className="contact-card-actions" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="btn btn-primary"
                style={{
                  padding: '0.65rem 1rem',
                  fontSize: '0.82rem',
                  flex: '1 1 140px',
                  justifyContent: 'center',
                }}
              >
                {copied ? <IconCheck size={15} strokeWidth={2.2} /> : <IconCopy size={15} strokeWidth={1.8} />}
                <span>{copied ? 'Copied!' : 'Copy Email'}</span>
              </button>
              <button
                type="button"
                onClick={handleOpenMail}
                className="btn btn-outline"
                style={{
                  padding: '0.65rem 0.9rem',
                  fontSize: '0.82rem',
                  flex: '1 1 110px',
                  justifyContent: 'center',
                }}
                title="Launch default mail app"
              >
                <span>Open Mail</span>
                <IconArrowRight size={14} strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
