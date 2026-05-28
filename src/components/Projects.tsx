import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FiExternalLink } from 'react-icons/fi'
import './Projects.css'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.proj__card', {
        scrollTrigger: { trigger: '.proj__card', start: 'top 85%' },
        opacity: 0, y: 60, duration: 0.9, ease: 'power3.out'
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className="container">
        <p className="proj__label">// projects</p>
        <h2 className="proj__heading">What I've <span className="gradient-text">Built</span></h2>
        <div className="proj__grid">
          <div className="proj__card">
            <div className="proj__card-glow" />
            <div className="proj__card-top">
              <div className="proj__num">01</div>
              <span className="proj__date">Aug – Sep 2025</span>
            </div>
            <h3>E-Commerce Sales Analysis Dashboard</h3>
            <p>Built an end-to-end interactive sales analytics dashboard in Power BI, integrating raw multi-source data via Power Query — reduced manual data prep time by 60%.</p>
            <ul className="proj__points">
              <li>Custom slicers tracking Revenue Trends, Order Volume, Profit Margins, AOV & CLV</li>
              <li>Real-time Target vs. Actual performance tracking — improved reporting efficiency by 40%</li>
              <li>Pareto analysis identifying top 20% revenue-contributing categories</li>
              <li>Inventory optimization projected to improve margins by 12–15%</li>
            </ul>
            <div className="proj__footer">
              <div className="proj__tech">
                <span>Power BI</span><span>Power Query</span><span>DAX</span><span>Excel</span>
              </div>
              <FiExternalLink className="proj__link-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
