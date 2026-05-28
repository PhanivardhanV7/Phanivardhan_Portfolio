import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <p className="footer__copy">
            &copy; 2026 <span>Phani Vardhan Vadla</span> — Built with passion
          </p>
          <div className="footer__links">
            <a href="mailto:phanivardhanvadla@gmail.com"><FiMail /></a>
            <a href="https://github.com/PhanivardhanV7" target="_blank" rel="noreferrer"><FiGithub /></a>
            <a href="https://linkedin.com/in/phanivardhan" target="_blank" rel="noreferrer"><FiLinkedin /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
