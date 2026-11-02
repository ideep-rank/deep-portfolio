'use client'
import { useEffect, useRef } from 'react'

export function CursorGlow() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef  = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ring = ringRef.current
    const dot  = dotRef.current
    if (!ring || !dot) return

    if (typeof window.matchMedia === 'function' && !matchMedia('(pointer:fine)').matches) {
      ring.style.display = 'none'
      dot.style.display  = 'none'
      return
    }

    let mouseX = -100, mouseY = -100
    let ringX = -100, ringY = -100
    let isHovered = false
    let inLightSection = false

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`

      const target = e.target as HTMLElement | null
      inLightSection = Boolean(target && target.closest('.block.light'))

      if (inLightSection) {
        ring.style.opacity = '0'
        dot.style.opacity = '0'
      } else {
        ring.style.opacity = '1'
        dot.style.opacity = '1'
      }
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      inLightSection = Boolean(target && target.closest('.block.light'))

      if (inLightSection) {
        ring.style.opacity = '0'
        dot.style.opacity = '0'
        return
      }

      if (
        target &&
        (target.closest('a') ||
         target.closest('button') ||
         target.closest('[role="button"]') ||
         target.closest('input') ||
         target.closest('textarea'))
      ) {
        isHovered = true
        ring.classList.add('cursor-ring--hover')
      } else {
        isHovered = false
        ring.classList.remove('cursor-ring--hover')
      }
    }

    const tick = () => {
      ringX += (mouseX - ringX) * 0.16
      ringY += (mouseY - ringY) * 0.16
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${isHovered ? 1.6 : 1})`
      requestAnimationFrame(tick)
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })

    document.addEventListener('mouseleave', () => {
      ring.style.opacity = '0'
      dot.style.opacity = '0'
    })
    document.addEventListener('mouseenter', () => {
      if (!inLightSection) {
        ring.style.opacity = '1'
        dot.style.opacity = '1'
      }
    })

    tick()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
    }
  }, [])

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
