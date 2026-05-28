import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const links = ['About','Experience','Skills','Projects','Education','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const go = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <a className="nav__logo" href="#home">PV<span>.</span></a>
          <ul className="nav__links">
            {links.map(l => (
              <li key={l}>
                <button onClick={() => go(l)}>{l}</button>
              </li>
            ))}
          </ul>
          <button className="nav__burger" onClick={() => setOpen(!open)}>
            {open ? <FiX size={22}/> : <FiMenu size={22}/>}
          </button>
        </div>
      </nav>

      <div className={`mobile-nav ${open ? 'mobile-nav--open' : ''}`}>
        {links.map((l, i) => (
          <button key={l} onClick={() => go(l)}
            style={{ animationDelay: `${i * 0.06}s` }}>
            <span className="mobile-nav__num">0{i+1}.</span>{l}
          </button>
        ))}
      </div>
    </>
  )
}
