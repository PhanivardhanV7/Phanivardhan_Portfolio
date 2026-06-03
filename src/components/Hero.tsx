import { useEffect, useRef, useState } from 'react'
import avatarImg from '../assets/avatar.png'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Torus, Icosahedron } from '@react-three/drei'
import gsap from 'gsap'
import { FiArrowRight, FiDownload } from 'react-icons/fi'
import './Hero.css'

const roles = ['Data Analyst', 'Data Annotator', 'BI Developer', 'ETL Specialist', 'QA Analyst']

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
      <Float speed={1} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[0.6, 32, 32]} position={[2.5, 1.5, -1]}>
          <MeshDistortMaterial color="#8b5cf6" distort={0.2} speed={1} roughness={0.1} metalness={0.6} />
        </Sphere>
      </Float>
      <Float speed={1.2} rotationIntensity={1} floatIntensity={1}>
        <Torus args={[0.5, 0.18, 12, 60]} position={[-3, 1.5, -1]}>
          <MeshDistortMaterial color="#06b6d4" distort={0.15} speed={1.5} roughness={0.1} metalness={0.7} />
        </Torus>
      </Float>
      <Float speed={0.8} rotationIntensity={1} floatIntensity={1}>
        <Icosahedron args={[0.5, 0]} position={[3, -2, -1]}>
          <meshStandardMaterial color="#10b981" roughness={0.2} metalness={0.5} />
        </Icosahedron>
      </Float>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </>
  )
}

export default function Hero() {
  const [roleText, setRoleText] = useState('')
  const avatarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Entrance animation — start visible, animate position only
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo('.hero__tag',    { y:30 }, { y:0, duration:0.7, ease:'power3.out' })
      .fromTo('.hero__name',   { y:50 }, { y:0, duration:0.9, ease:'power3.out' }, '-=0.4')
      .fromTo('.hero__role',   { y:30 }, { y:0, duration:0.7, ease:'power3.out' }, '-=0.5')
      .fromTo('.hero__desc',   { y:30 }, { y:0, duration:0.7, ease:'power3.out' }, '-=0.4')
      .fromTo('.hero__btns',   { y:20 }, { y:0, duration:0.6, ease:'power3.out' }, '-=0.3')
      .fromTo('.hero__social', { x:-20 },{ x:0, duration:0.6, ease:'power3.out' }, '-=0.3')
      .fromTo('.hero__avatar-wrap', { x:60 }, { x:0, duration:1, ease:'power3.out' }, '-=0.8')

    // Floating animation on avatar
    gsap.to('.hero__avatar-wrap', {
      y: -18, duration: 2.5, ease: 'sine.inOut',
      yoyo: true, repeat: -1
    })

    // Mouse parallax on avatar
    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      const dx = (e.clientX - cx) / cx
      const dy = (e.clientY - cy) / cy
      gsap.to('.hero__avatar-wrap', {
        x: dx * 18, y: dy * 12,
        duration: 0.8, ease: 'power2.out',
        overwrite: 'auto'
      })
    }
    window.addEventListener('mousemove', onMove)

    // Typing effect
    let ri = 0, ci = 0, del = false
    const type = () => {
      const cur = roles[ri]
      if (!del) { ci++; setRoleText(cur.slice(0, ci)); if (ci === cur.length) { del = true; setTimeout(type, 2000); return } }
      else { ci--; setRoleText(cur.slice(0, ci)); if (ci === 0) { del = false; ri = (ri+1) % roles.length } }
      setTimeout(type, del ? 50 : 90)
    }
    const t = setTimeout(type, 1500)

    return () => {
      clearTimeout(t)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return (
    <section id="home" className="hero">
      {/* 3D background particles */}
      <div className="hero__canvas">
        <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
          <Scene3D />
        </Canvas>
      </div>

      <div className="hero__inner container">
        {/* Left: text content */}
        <div className="hero__content">
          <p className="hero__tag">👋 Available for opportunities</p>
          <h1 className="hero__name">
            Phani Vardhan<br />
            <span className="gradient-text">Vadla</span>
          </h1>
          <div className="hero__role">
            <span className="hero__role-prefix">I'm a </span>
            <span className="hero__role-text">{roleText}</span>
            <span className="hero__cursor">|</span>
          </div>
          <p className="hero__desc">
            Results-driven analyst with 2+ years of experience in data quality assurance,
            ETL pipelines, computer vision annotation, and BI reporting.
            Maintaining <strong>95%+ accuracy</strong> across high-volume workflows.
          </p>
          <div className="hero__btns">
            <button className="btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View My Work <FiArrowRight />
            </button>
            <a href="/Phanivardhan_V.pdf" className="btn-ghost" target="_blank" rel="noreferrer">
              Resume <FiDownload />
            </a>
          </div>
          <div className="hero__social">
            <a href="mailto:phanivardhanvadla@gmail.com"><i className="fas fa-envelope" /></a>
            <a href="https://github.com/PhanivardhanV7" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
            <a href="https://linkedin.com/in/phanivardhan" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /></a>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="hero__avatar-side">
          <div className="hero__avatar-wrap" ref={avatarRef}>
            {/* Glow rings */}
            <div className="hero__glow-ring hero__glow-ring--1" />
            <div className="hero__glow-ring hero__glow-ring--2" />
            <div className="hero__glow-ring hero__glow-ring--3" />
            {/* Avatar image */}
            <img
              src={avatarImg}
              alt="Phani Vardhan Vadla"
              className="hero__avatar-img"
            />
            {/* Floating badges */}
            {/* Floating badges with visible colored logos */}
            <div className="hero__badge hero__badge--tl">
              <span className="badge-logo badge-logo--powerbi">📊</span>
              Power BI
            </div>
            <div className="hero__badge hero__badge--tr">
              <span className="badge-logo badge-logo--excel">📗</span>
              MS Excel
            </div>
            <div className="hero__badge hero__badge--bl">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" width="18" height="18" />
              Python
            </div>
            <div className="hero__badge hero__badge--br">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" width="18" height="18" />
              SQL
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
