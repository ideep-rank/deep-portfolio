'use client'
import { useEffect, useState } from 'react'
import { IconArrowRight } from '@/components/Icons'

function RollCounter({ value, plus, suffix }: { value: number; plus?: boolean; suffix?: string }) {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setStarted(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const digits = String(value).split('')
  const reelItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const displaySuffix = suffix ?? (plus ? '+' : '')

  return (
    <div className="stat-num" aria-label={`${value}${displaySuffix}`}>
      <span style={{ display: 'inline-flex', overflow: 'hidden', verticalAlign: 'top', height: '1em' }}>
        {digits.map((digit, i) => {
          const target = Number(digit)
          const targetIndex = 10 + target
          const offsetPercent = (targetIndex / reelItems.length) * 100

          return (
            <span key={i} style={{ display: 'inline-block', width: '0.62em', textAlign: 'center' }}>
              <span
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  transform: started ? `translateY(-${offsetPercent}%)` : 'translateY(0%)',
                  transition: `transform ${1.4 + i * 0.25}s cubic-bezier(0.16, 1, 0.3, 1)`,
                }}
              >
                {reelItems.map((n, idx) => (
                  <span key={idx} style={{ height: '1em', lineHeight: 1 }}>
                    {n}
                  </span>
                ))}
              </span>
            </span>
          )
        })}
      </span>
      {displaySuffix && <span>{displaySuffix}</span>}
    </div>
  )
}

export function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Deep Sapphire & Indigo Celestial Nebulas */}
      <div className="hero-nebula" aria-hidden="true" />
      <div className="hero-nebula-left" aria-hidden="true" />

      {/* Bespoke Celestial Astrolabe, Orbital Rings & Constellation Map */}
      <svg
        className="hero-celestial-canvas"
        viewBox="0 0 1400 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Celestial Gold Gradients */}
          <linearGradient id="gold-orbit" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5dc8e" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#c9963a" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8a651f" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="blue-ray" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5898ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0b1536" stopOpacity="0.02" />
          </linearGradient>

          <radialGradient id="sun-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f5dc8e" stopOpacity="0.95" />
            <stop offset="28%" stopColor="#c9963a" stopOpacity="0.5" />
            <stop offset="65%" stopColor="#8a651f" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#070e24" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="meteor-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="65%" stopColor="#f5dc8e" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>

          {/* Glow filter for celestial star nodes */}
          <filter id="star-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Shooting Meteor Streak (High Upper Sky) */}
        <g className="hero-shooting-star">
          <line x1="80" y1="35" x2="220" y2="105" stroke="url(#meteor-gradient)" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="220" cy="105" r="2.5" fill="#ffffff" filter="url(#star-glow)" />
        </g>

        {/* Ambient Starlight Field with Twinkles (Clear of Text) */}
        <g fill="#f5dc8e">
          <g className="hero-star-twinkle-1">
            <circle cx="70" cy="120" r="1.2" />
            <circle cx="540" cy="70" r="1.3" />
            <circle cx="780" cy="80" r="1.2" />
            <circle cx="1290" cy="690" r="2" filter="url(#star-glow)" />
          </g>
          <g className="hero-star-twinkle-2">
            <circle cx="180" cy="50" r="1.5" />
            <circle cx="340" cy="620" r="1.3" />
            <circle cx="1240" cy="140" r="1.7" />
            <circle cx="890" cy="780" r="1.4" />
          </g>
          <g className="hero-star-twinkle-3">
            <circle cx="60" cy="480" r="1.4" />
            <circle cx="580" cy="130" r="2" filter="url(#star-glow)" />
            <circle cx="1320" cy="380" r="1.3" />
            <circle cx="1180" cy="520" r="1.5" />
            <circle cx="450" cy="740" r="1.2" />
          </g>
        </g>

        {/* Major Astrolabe & Armillary Spheres (Centered around Right Horizon) */}
        <g transform="translate(980, 420)">
          {/* Subtle Outer Zodiac / Degree Ring - Continuous Slow Dash Rotation */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="360"
              dur="75s"
              repeatCount="indefinite"
            />
            <circle
              r="380"
              fill="none"
              stroke="url(#gold-orbit)"
              strokeWidth="1.2"
              strokeDasharray="4 8"
            />
          </g>

          {/* Primary Celestial Equator (Fixed Stationary Reference Ring) */}
          <circle
            r="320"
            fill="none"
            stroke="#c9963a"
            strokeOpacity="0.28"
            strokeWidth="1.5"
          />

          {/* Ecliptic Orbit (Fixed Track at -26° Tilt) with Planets Gliding Precisely on Path */}
          <g transform="rotate(-26)">
            {/* The exact path used for both the visible stroked track and the motion path */}
            <path
              id="hero-ecliptic-track"
              d="M 340,0 A 340 180 0 1 1 -340,0 A 340 180 0 1 1 340,0 Z"
              fill="none"
              stroke="url(#gold-orbit)"
              strokeWidth="1.8"
              strokeDasharray="6 4"
            />

            {/* Planet Node 1 (Golden Star with Halo): Permanently locked to the track */}
            <g>
              <animateMotion dur="32s" repeatCount="indefinite">
                <mpath href="#hero-ecliptic-track" />
              </animateMotion>
              <circle r="6.5" fill="#f5dc8e" filter="url(#star-glow)" />
              <circle r="13" fill="none" stroke="#f5dc8e" strokeOpacity="0.5" strokeWidth="1" className="hero-planet-halo" />
            </g>

            {/* Planet Node 2 (Counter Moon): Offset 16s along the exact same track */}
            <g>
              <animateMotion dur="32s" begin="-16s" repeatCount="indefinite">
                <mpath href="#hero-ecliptic-track" />
              </animateMotion>
              <circle r="4" fill="#f5dc8e" filter="url(#star-glow)" opacity="0.85" />
            </g>
          </g>

          {/* Polar Inclined Orbit (Fixed Track at +35° Tilt) with Sapphire Planet Beta Locked to Path */}
          <g transform="rotate(35)">
            {/* The exact path used for both the visible stroked track and the motion path */}
            <path
              id="hero-polar-track"
              d="M 0,-310 A 190 310 0 1 1 0,310 A 190 310 0 1 1 0,-310 Z"
              fill="none"
              stroke="#5898ff"
              strokeOpacity="0.32"
              strokeWidth="1.4"
              strokeDasharray="5 5"
            />

            {/* Sapphire Planet Beta: Permanently locked to the polar track */}
            <g>
              <animateMotion dur="24s" repeatCount="indefinite">
                <mpath href="#hero-polar-track" />
              </animateMotion>
              <circle r="5.5" fill="#5898ff" filter="url(#star-glow)" />
              <circle r="12" fill="none" stroke="#5898ff" strokeOpacity="0.5" strokeWidth="1" className="hero-planet-halo" />
            </g>
          </g>

          {/* Middle Coordinate Track (r=220) with Gliding Golden Node Gamma */}
          <g>
            <path
              id="hero-equator-track"
              d="M 220,0 A 220 220 0 1 1 -220,0 A 220 220 0 1 1 220,0 Z"
              fill="none"
              stroke="#c9963a"
              strokeOpacity="0.35"
              strokeWidth="1.2"
              strokeDasharray="8 6"
            />
            {/* Golden Node Gamma: Permanently locked to the r=220 ring */}
            <g>
              <animateMotion dur="20s" repeatCount="indefinite">
                <mpath href="#hero-equator-track" />
              </animateMotion>
              <circle r="4" fill="#f5dc8e" filter="url(#star-glow)" />
              <circle r="8" fill="none" stroke="#c9963a" strokeOpacity="0.35" strokeWidth="1" />
            </g>
          </g>

          {/* Inner Coordinate Ring (Rotating Counter-Clockwise) */}
          <g>
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0"
              to="-360"
              dur="42s"
              repeatCount="indefinite"
            />
            <circle
              r="160"
              fill="none"
              stroke="url(#gold-orbit)"
              strokeWidth="1.4"
              strokeDasharray="3 6"
            />
          </g>

          {/* Inner Golden Core Sphere with Breathing Solar Pulse */}
          <g className="hero-sun-core">
            <circle r="90" fill="url(#sun-core)" />
            <circle r="4.5" fill="#f5dc8e" filter="url(#star-glow)" />
          </g>

          {/* Celestial Meridian Crosshairs */}
          <g className="hero-crosshairs">
            <line x1="-420" y1="0" x2="420" y2="0" stroke="#c9963a" strokeOpacity="0.18" strokeWidth="1" />
            <line x1="0" y1="-420" x2="0" y2="420" stroke="#c9963a" strokeOpacity="0.18" strokeWidth="1" />
            <line x1="-300" y1="-300" x2="300" y2="300" stroke="#5898ff" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="4 4" />
          </g>
        </g>

        {/* Upper Constellation Geometries (Safely Above Text Area) */}
        <g stroke="url(#gold-orbit)" strokeWidth="1" fill="none" opacity="0.65" className="hero-constellation-lines">
          {/* Constellation Alpha */}
          <polyline points="120,110 220,65 340,95 450,55" />
          <line x1="220" y1="65" x2="260" y2="125" strokeDasharray="3 3" />
        </g>
        <g fill="#f5dc8e" filter="url(#star-glow)" className="hero-constellation-nodes">
          <circle cx="120" cy="110" r="2.8" />
          <circle cx="220" cy="65" r="3.2" />
          <circle cx="340" cy="95" r="3" />
          <circle cx="450" cy="55" r="3.5" />
          <circle cx="260" cy="125" r="2.2" />
        </g>

        {/* Celestial Horizon Baseline Grid (Equatorial Arc) */}
        <g stroke="#c9963a" strokeOpacity="0.15" strokeWidth="1">
          <line x1="0" y1="780" x2="1400" y2="780" />
          <line x1="0" y1="830" x2="1400" y2="830" strokeDasharray="4 8" />
          <path d="M 0,720 Q 700,750 1400,720" fill="none" stroke="url(#blue-ray)" strokeWidth="1.2" />
        </g>
      </svg>

      <div className="container">
        <div className="hero-content">
          <div className="eyebrow hero-eyebrow reveal in-view">
            <span>High-Performance Web Architecture</span>
          </div>

          <h1 className="hero-title disp reveal in-view">
            <span>Code Built for <span className="gold">Longevity</span>.</span>
            <span className="line2">
              Platforms Engineered to <span className="gold">Perform at Scale</span>.
            </span>
          </h1>

          <p className="hero-subtitle reveal in-view">
            Software Engineer with 4+ years developing high-performance WordPress systems, bespoke plugins, and conversion-focused Web platforms designed to load instantly and scale effortlessly.
          </p>

          <div className="hero-ctas reveal in-view">
            <a href="#work" className="btn btn-primary">
              <span>Explore Selected Work</span>
              <IconArrowRight size={14} strokeWidth={2.2} />
            </a>
            <a href="#contact" className="btn btn-outline">
              <span>Let&apos;s Build Together</span>
              <IconArrowRight size={14} strokeWidth={2.2} />
            </a>
          </div>

          <div className="hero-stats reveal in-view">
            <div className="stat-item">
              <RollCounter value={4} plus={true} />
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <RollCounter value={10} plus={true} />
              <div className="stat-label">Production Platforms</div>
            </div>
            <div className="stat-item">
              <RollCounter value={100} suffix="%" />
              <div className="stat-label">Ownership &amp; QA</div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span className="cue-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
