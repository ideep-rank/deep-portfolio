'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { projects, type ProjectType } from '@/data'
import { IconArrowLeft, IconArrowRight } from '@/components/Icons'

export function Work() {
  const [filter, setFilter] = useState<'all' | ProjectType>('all')

  const filtered = filter === 'all'
    ? projects
    : projects.filter(p => p.type === filter)

  return (
    <section id="work" className="block dark">
      <div className="container">
        <div className="section-head center reveal">
          <div className="eyebrow">Portfolio</div>
          <h2>
            Selected <span className="gold">Work</span>
          </h2>
          <p>
            Real-world projects built for clients — from custom WordPress architectures to scalable Webflow builds.
          </p>

          {/* Category Filter Tabs */}
          <div className="work-tabs" role="tablist" aria-label="Project filter">
            <button
              type="button"
              className={`work-tab ${filter === 'all' ? 'active' : ''}`}
              role="tab"
              aria-selected={filter === 'all'}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button
              type="button"
              className={`work-tab ${filter === 'wordpress' ? 'active' : ''}`}
              role="tab"
              aria-selected={filter === 'wordpress'}
              onClick={() => setFilter('wordpress')}
            >
              WordPress
            </button>
            <button
              type="button"
              className={`work-tab ${filter === 'webflow' ? 'active' : ''}`}
              role="tab"
              aria-selected={filter === 'webflow'}
              onClick={() => setFilter('webflow')}
            >
              Webflow
            </button>
          </div>
        </div>

        {/* 3D Interactive Carousel */}
        <div className="reveal">
          <Slider key={filter} slides={filtered} />
        </div>
      </div>
    </section>
  )
}

// ─── 3D Perspective Carousel ──────────────────────────────────────────────────
function Slider({ slides }: { slides: typeof projects }) {
  const sceneRef   = useRef<HTMLDivElement>(null)
  const currentRef = useRef(0)
  const busyRef    = useRef(false)
  const autoRef    = useRef<ReturnType<typeof setInterval> | null>(null)
  const dotsRef    = useRef<HTMLDivElement>(null)
  const slidesRef  = useRef<HTMLElement[]>([])
  const total      = slides.length

  function getCFG() {
    if (typeof window === 'undefined') {
      return { xGap: 265, zDepth: 220, rotY: 18, scaleC: 1, scaleS: 0.82, scaleF: 0.64, opacS: 0.78, opacF: 0.40 }
    }
    const w = window.innerWidth
    if (w <= 600) {
      // Mobile: 1 card focus
      return { xGap: 0,   zDepth: 160, rotY: 0,  scaleC: 1, scaleS: 0.78, scaleF: 0.56, opacS: 0,    opacF: 0    }
    }
    if (w <= 900) {
      // Tablet: 5 cards
      return { xGap: 160, zDepth: 180, rotY: 12, scaleC: 1, scaleS: 0.80, scaleF: 0.62, opacS: 0.70, opacF: 0.35 }
    }
    if (w <= 1100) {
      // Small laptop
      return { xGap: 220, zDepth: 200, rotY: 16, scaleC: 1, scaleS: 0.82, scaleF: 0.64, opacS: 0.78, opacF: 0.40 }
    }
    // Desktop: 5 cards fully fanned out towards the arrows
    return { xGap: 265, zDepth: 220, rotY: 18, scaleC: 1, scaleS: 0.82, scaleF: 0.64, opacS: 0.78, opacF: 0.40 }
  }

  function render(animate: boolean) {
    const CFG = getCFG()
    const cur = currentRef.current
    slidesRef.current.forEach((slide, i) => {
      let offset = i - cur
      if (offset > total / 2)  offset -= total
      if (offset < -total / 2) offset += total
      const abs  = Math.abs(offset)
      const sign = offset < 0 ? -1 : offset > 0 ? 1 : 0
      const tx   = sign * Math.min(abs, 2) * CFG.xGap
      const tz   = -abs * CFG.zDepth
      const ry   = -sign * Math.min(abs, 1) * CFG.rotY
      const sc   = abs === 0 ? CFG.scaleC : abs === 1 ? CFG.scaleS : CFG.scaleF
      const op   = abs === 0 ? 1 : abs === 1 ? CFG.opacS : abs === 2 ? CFG.opacF : 0
      const zi   = Math.max(0, total - abs * 2)

      if (animate) slide.classList.add('cs-animated')
      const transformValue = `translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) scale(${sc})`
      slide.style.transform = transformValue
      slide.style.webkitTransform = transformValue
      slide.style.opacity       = String(op)
      slide.style.visibility    = op > 0 ? 'visible' : 'hidden'
      slide.style.zIndex        = String(zi)
      slide.style.pointerEvents = (abs === 0 || (abs <= 2 && op > 0)) ? 'auto' : 'none'
      slide.setAttribute('data-active', abs === 0 ? 'true' : 'false')
      slide.setAttribute('data-hidden', op === 0 ? 'true' : 'false')
    })

    dotsRef.current?.querySelectorAll<HTMLButtonElement>('.cs-dot').forEach((d, i) =>
      d.classList.toggle('active', i === cur)
    )
  }

  function goTo(idx: number) {
    if (busyRef.current || total <= 1) return
    busyRef.current = true
    currentRef.current = ((idx % total) + total) % total
    render(true)
    setTimeout(() => { busyRef.current = false }, 720)
  }

  function startAuto() {
    stopAuto()
    if (total <= 1) return
    autoRef.current = setInterval(() => {
      currentRef.current = (currentRef.current + 1) % total
      render(true)
    }, 4500)
  }

  function stopAuto() {
    if (autoRef.current) clearInterval(autoRef.current)
  }

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return
    slidesRef.current = Array.from(scene.querySelectorAll<HTMLElement>('.cs-slide'))
    currentRef.current = 0
    requestAnimationFrame(() => render(false))

    const canAutoPlay = !window.matchMedia('(max-width: 767px), (prefers-reduced-motion: reduce)').matches
    if (canAutoPlay) startAuto()

    const onResize = () => render(false)
    window.addEventListener('resize', onResize)

    // Touch Swipe
    let tx0 = 0
    const onTouchStart = (e: TouchEvent) => { tx0 = e.touches[0].clientX }
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - tx0
      if (Math.abs(dx) > 48) goTo(currentRef.current + (dx < 0 ? 1 : -1))
    }
    scene.addEventListener('touchstart', onTouchStart, { passive: true })
    scene.addEventListener('touchend', onTouchEnd, { passive: true })

    // Keyboard Arrows
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  goTo(currentRef.current - 1)
      if (e.key === 'ArrowRight') goTo(currentRef.current + 1)
    }
    document.addEventListener('keydown', onKey)

    if (canAutoPlay) {
      scene.addEventListener('mouseenter', stopAuto)
      scene.addEventListener('mouseleave', startAuto)
    }

    return () => {
      stopAuto()
      window.removeEventListener('resize', onResize)
      document.removeEventListener('keydown', onKey)
      scene.removeEventListener('touchstart', onTouchStart)
      scene.removeEventListener('touchend', onTouchEnd)
      if (canAutoPlay) {
        scene.removeEventListener('mouseenter', stopAuto)
        scene.removeEventListener('mouseleave', startAuto)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  return (
    <div className="cs-slider-scene" id="csSliderScene" ref={sceneRef}>
      <div className="cs-slider-track" id="csSliderTrack">
        {slides.map((p, i) => (
          <article
            key={p.title}
            className="cs-slide"
            data-index={i}
            onClick={() => { if (i !== currentRef.current) goTo(i) }}
          >
            <div className="case-study-card__img-wrap">
              <Image
                src={p.img}
                alt={p.alt}
                width={720}
                height={420}
                className="case-study-card__img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                priority={i === 0}
              />
            </div>
            <div className="case-study-card__body">
              <div className="case-study-card__category">{p.category}</div>
              <h3 className="case-study-card__title">{p.title}</h3>
              <p className="case-study-card__excerpt">{p.excerpt}</p>
              <div className="case-study-card__tags">
                {p.tags.map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
              <a
                href={p.url}
                className="btn btn-outline"
                style={{ padding: '0.65rem 1.4rem', fontSize: '0.76rem', alignSelf: 'flex-start' }}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
              >
                <span>View Website</span>
                <IconArrowRight size={14} strokeWidth={2.2} />
              </a>
            </div>
          </article>
        ))}
      </div>

      {total > 1 && (
        <div className="cs-nav-controls">
          <button
            type="button"
            className="cs-btn cs-btn--prev"
            aria-label="Previous project"
            onClick={() => goTo(currentRef.current - 1)}
          >
            <IconArrowLeft size={18} strokeWidth={2.2} />
          </button>
          <div className="cs-dots" ref={dotsRef}>
            {slides.map((_, i) => (
              <button
                type="button"
                key={i}
                className={`cs-dot${i === 0 ? ' active' : ''}`}
                aria-label={`Go to project ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="cs-btn cs-btn--next"
            aria-label="Next project"
            onClick={() => goTo(currentRef.current + 1)}
          >
            <IconArrowRight size={18} strokeWidth={2.2} />
          </button>
        </div>
      )}
    </div>
  )
}
