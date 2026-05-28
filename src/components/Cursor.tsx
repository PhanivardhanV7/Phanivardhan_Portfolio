import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null)
  const ring = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      gsap.to(dot.current,  { x: e.clientX, y: e.clientY, duration: 0.08 })
      gsap.to(ring.current, { x: e.clientX, y: e.clientY, duration: 0.2 })
    }
    window.addEventListener('mousemove', move)

    const grow = () => {
      gsap.to(ring.current, { scale: 2.5, opacity: 0.5, duration: 0.2 })
      gsap.to(dot.current,  { scale: 0,   duration: 0.2 })
    }
    const shrink = () => {
      gsap.to(ring.current, { scale: 1, opacity: 1, duration: 0.2 })
      gsap.to(dot.current,  { scale: 1, duration: 0.2 })
    }

    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', width: 8, height: 8,
        background: '#8b5cf6', borderRadius: '50%',
        pointerEvents: 'none', zIndex: 99999,
        transform: 'translate(-50%,-50%)',
        mixBlendMode: 'difference'
      }} />
      <div ref={ring} style={{
        position: 'fixed', width: 32, height: 32,
        border: '1.5px solid rgba(139,92,246,0.6)',
        borderRadius: '50%', pointerEvents: 'none',
        zIndex: 99998, transform: 'translate(-50%,-50%)',
        mixBlendMode: 'difference'
      }} />
    </>
  )
}
