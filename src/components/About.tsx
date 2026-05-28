import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './About.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { num: '2+',    label: 'Years Experience' },
  { num: '95%+',  label: 'Accuracy Rate' },
  { num: '50+',   label: 'Datasets Delivered' },
  { num: '2x',    label: 'Rockstar Award' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about__label', { scrollTrigger: { trigger: '.about__label', start: 'top 85%' }, opacity: 0, x: -30, duration: 0.6 })
      gsap.from('.about__heading', { scrollTrigger: { trigger: '.about__heading', start: 'top 85%' }, opacity: 0, y: 40, duration: 0.8, ease: 'power3.out' })
      gsap.from('.about__para', { scrollTrigger: { trigger: '.about__para', start: 'top 85%' }, opacity: 0, y: 30, stagger: 0.15, duration: 0.7 })
      gsap.from('.about__stat', { scrollTrigger: { trigger: '.about__stats', start: 'top 85%' }, opacity: 0, y: 40, stagger: 0.1, duration: 0.6, ease: 'back.out(1.5)' })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="about" className="section about" ref={ref}>
      <div className="container">
        <p className="about__label reveal">// about me</p>
        <div className="about__grid">
          <div className="about__left">
            <h2 className="about__heading">
              Turning raw data into<br />
              <span className="gradient-text">meaningful insights</span>
            </h2>
            <p className="about__para">
              I'm a <strong>Data Processing Analyst & Data Annotator</strong> with 2+ years at Indivillage Tech Solutions LLP.
              I specialize in data quality assurance, ETL pipeline optimization, computer vision annotation (CVAT), and BI reporting.
            </p>
            <p className="about__para">
              Proficient in Python, SQL, Power BI, Tableau, and Looker Studio — I build interactive dashboards,
              automate data cleaning pipelines, and collaborate cross-functionally to meet dynamic SLA targets.
            </p>
            <button className="btn-primary" style={{ marginTop: '2rem' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Let's Talk <i className="fas fa-arrow-right" />
            </button>
          </div>
          <div className="about__right">
            <div className="about__stats">
              {stats.map((s, i) => (
                <div className="about__stat" key={i}>
                  <h3>{s.num}</h3>
                  <p>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
