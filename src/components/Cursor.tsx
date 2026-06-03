import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const raf = useRef<number>(0)

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      // Dot follows instantly
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      }
    }
    window.addEventListener('mousemove', onMove)

    // Ring uses smooth RAF loop — much faster than GSAP tweens
    const loop = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.25
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.25
      if (ring.current) {
        ring.current.style.transform = `translate(${ringPos.current.x - 16}px, ${ringPos.current.y - 16}px)`
      }
      raf.current = requestAnimationFrame(loop)
    }
    raf.current = requestAnimationFrame(loop)

    const grow = () => {
      if (ring.current) { ring.current.style.transform += ' scale(2)'; ring.current.style.opacity = '0.4' }
    }
    const shrink = () => {
      if (ring.current) { ring.current.style.opacity = '1' }
    }
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', width: 8, height: 8,
        background: '#8b5cf6', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 99999,
        top: 0, left: 0,
        willChange: 'transform',
        transition: 'opacity 0.2s'
      }} />
      <div ref={ring} style={{
        position: 'fixed', width: 32, height: 32,
        border: '1.5px solid rgba(139,92,246,0.7)',
        borderRadius: '50%', pointerEvents: 'none',
        zIndex: 99998, top: 0, left: 0,
        willChange: 'transform',
        transition: 'opacity 0.2s'
      }} />
    </>
  )
}
