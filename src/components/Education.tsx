import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Education.css'

gsap.registerPlugin(ScrollTrigger)

const awards = [
  { icon: 'fas fa-certificate', color: '#8b5cf6', title: 'Data Analytics Certification – Coding Ninjas', desc: 'Completed intensive certification gaining hands-on proficiency across Excel, Power BI, Tableau, SQL, Python, and Data Visualization' },
  { icon: 'fas fa-star',        color: '#f59e0b', title: 'Monthly Rockstar Performance Award',           desc: 'Recognized twice for exceptional data quality & productivity — March 2024 & March 2026' },
  { icon: 'fas fa-trophy',      color: '#10b981', title: 'PrepSAT Hackathon – PrepInsta',                desc: 'Ranked 10,012 out of 90,000+ global participants (2023)' },
]

export default function Education() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.edu__card', { scrollTrigger: { trigger: '.edu__grid', start: 'top 85%' }, opacity: 0, y: 50, stagger: 0.15, duration: 0.7, ease: 'power3.out' })
      gsap.from('.award__item', { scrollTrigger: { trigger: '.awards__list', start: 'top 85%' }, opacity: 0, x: -40, stagger: 0.12, duration: 0.6, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="education" className="section education" ref={ref}>
      <div className="container">
        <p className="edu__label">// education</p>
        <h2 className="edu__heading">Background & <span className="gradient-text">Achievements</span></h2>
        <div className="edu__grid">
          <div className="edu__card">
            <div className="edu__card-icon"><i className="fas fa-graduation-cap" /></div>
            <h3>Master of Computer Applications</h3>
            <p className="edu__inst">Sri Balaji PG College</p>
            <p className="edu__meta">Anantapur, AP &nbsp;·&nbsp; 2023 – 2025</p>
            <p className="edu__gpa">GPA: 8.1 / 10</p>
            <p className="edu__course">DBMS · Data Mining · ML · Python · Statistics</p>
          </div>
          <div className="edu__card">
            <div className="edu__card-icon"><i className="fas fa-university" /></div>
            <h3>Bachelor of Science</h3>
            <p className="edu__inst">Acharya Nagarjuna University</p>
            <p className="edu__meta">Guntur, AP &nbsp;·&nbsp; 2019 – 2022</p>
            <p className="edu__gpa">GPA: 7.8 / 10</p>
          </div>
        </div>
        <div className="awards__list">
          {awards.map((a, i) => (
            <div className="award__item" key={i} style={{ '--aw-color': a.color } as React.CSSProperties}>
              <i className={a.icon} />
              <div>
                <h4>{a.title}</h4>
                <p>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
