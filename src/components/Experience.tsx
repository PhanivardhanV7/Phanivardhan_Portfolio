import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Experience.css'

gsap.registerPlugin(ScrollTrigger)

const jobs = [
  {
    title: 'Data Annotator – Computer Vision',
    company: 'Indivillage Tech Solutions LLP',
    date: 'Mar 2026 – Present',
    color: '#8b5cf6',
    points: [
      'Executed multi-modal image annotation in CVAT using Bounding Boxes, Polygons, and Keypoints for production-grade AI/ML models.',
      'Achieved 90%+ annotation accuracy across 10,000+ images per sprint through rigorous QA validation.',
      'Reduced annotation cycle time by 25% using CVAT interpolation and AI-assisted annotation features.',
      'Maintained detailed annotation logs enabling first-pass accuracy gains of ~8%.',
    ],
    tags: ['CVAT','Computer Vision','Instance Segmentation','QA'],
  },
  {
    title: 'Program Coordinator – Data Operations',
    company: 'Indivillage Tech Solutions LLP',
    date: 'Jun 2025 – Mar 2026',
    color: '#06b6d4',
    points: [
      'Managed end-to-end data ingestion workflows from Tatva platform with structured cleaning in Google Sheets and Excel.',
      'Engineered automated Excel macros reducing manual effort by 40% and cutting delivery turnaround by 1 business day.',
      'Ensured 100% compliance across 50+ dataset deliveries with zero rejection incidents.',
      'Maintained on-time delivery rates above 98% across all projects.',
    ],
    tags: ['ETL','Excel Macros','Google Sheets','SLA Management'],
  },
  {
    title: 'Quality Control Analyst',
    company: 'Indivillage Tech Solutions LLP',
    date: 'Apr 2024 – Dec 2025',
    color: '#10b981',
    points: [
      'Maintained 95%+ data accuracy via multi-stage validation checks on high-priority client datasets.',
      'Developed error-tracking frameworks reducing recurring inconsistencies by 30%.',
      'Improved first-pass acceptance rate by 15% through actionable error reports.',
    ],
    tags: ['Data Validation','QA','Root Cause Analysis'],
  },
  {
    title: 'Data Processing Associate',
    company: 'Indivillage Tech Solutions LLP',
    date: 'Nov 2023 – Mar 2024',
    color: '#f59e0b',
    points: [
      'Processed high volumes of client data in Tatva platform, validating formatting and flagging inconsistencies.',
      'Reduced Average Task Time by 20% within first three months.',
      'Maintained zero-defect submission record during first 90 days.',
    ],
    tags: ['Tatva Platform','Data Processing','Workflow Efficiency'],
  },
]

export default function Experience() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.exp__card').forEach((el, i) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 85%' },
          opacity: 0, x: i % 2 === 0 ? -60 : 60,
          duration: 0.8, ease: 'power3.out'
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className="section experience" ref={ref}>
      <div className="container">
        <p className="exp__label">// experience</p>
        <h2 className="exp__heading">Where I've <span className="gradient-text">Worked</span></h2>
        <div className="exp__list">
          {jobs.map((job, i) => (
            <div className="exp__card" key={i} style={{ '--accent-color': job.color } as React.CSSProperties}>
              <div className="exp__card-header">
                <div>
                  <h3>{job.title}</h3>
                  <p className="exp__company">{job.company}</p>
                </div>
                <span className="exp__date">{job.date}</span>
              </div>
              <ul className="exp__points">
                {job.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
              <div className="exp__tags">
                {job.tags.map(t => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
