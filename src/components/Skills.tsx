import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Skills.css'

gsap.registerPlugin(ScrollTrigger)

const groups = [
  { icon: 'fas fa-code',      title: 'Programming & Query',    color: '#8b5cf6', pills: ['Python','Pandas','NumPy','SQL','MySQL','SQL Server','CTEs','Window Functions'] },
  { icon: 'fas fa-chart-bar', title: 'BI & Visualization',     color: '#06b6d4', pills: ['Power BI','Power Query','DAX','Tableau','Looker Studio','Excel','Pivot Tables','Macros'] },
  { icon: 'fas fa-eye',       title: 'Data Annotation & CV',   color: '#10b981', pills: ['CVAT','Bounding Boxes','Polygons','Keypoints','Interpolation','AI Annotation','Instance Segmentation'] },
  { icon: 'fas fa-tools',     title: 'Tools & Collaboration',  color: '#f59e0b', pills: ['Git','GitHub','Jupyter','VS Code','MS Office','Google Sheets','Tatva Platform'] },
]

export default function Skills() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.skill__card').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%' },
          opacity: 0, y: 50, duration: 0.7, delay: i * 0.1, ease: 'power3.out'
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className="container">
        <p className="skills__label">// skills</p>
        <h2 className="skills__heading">Technical <span className="gradient-text">Arsenal</span></h2>
        <div className="skills__grid">
          {groups.map((g, i) => (
            <div className="skill__card" key={i} style={{ '--card-color': g.color } as React.CSSProperties}>
              <div className="skill__card-top">
                <i className={g.icon} style={{ color: g.color }} />
                <h3>{g.title}</h3>
              </div>
              <div className="skill__pills">
                {g.pills.map(p => <span key={p}>{p}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
