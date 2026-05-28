import { useRef, FormEvent } from 'react'
import { FiSend, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const nameRef    = useRef<HTMLInputElement>(null)
  const emailRef   = useRef<HTMLInputElement>(null)
  const subjectRef = useRef<HTMLInputElement>(null)
  const msgRef     = useRef<HTMLTextAreaElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const s = subjectRef.current!.value
    const b = `Name: ${nameRef.current!.value}\nEmail: ${emailRef.current!.value}\n\nMessage:\n${msgRef.current!.value}`
    window.location.href = `mailto:phanivardhanvadla@gmail.com?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`
  }

  const handleWhatsApp = () => {
    const n = nameRef.current!.value, em = emailRef.current!.value
    const s = subjectRef.current!.value, m = msgRef.current!.value
    if (!n || !em || !s || !m) { alert('Please fill in all fields.'); return }
    const msg = `*Portfolio Contact*\n\n*Name:* ${n}\n*Email:* ${em}\n*Subject:* ${s}\n\n*Message:*\n${m}`
    window.open(`https://wa.me/919603251850?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="contact__label">// contact</p>
        <h2 className="contact__heading">Let's <span className="gradient-text">Connect</span></h2>
        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__intro">I'm always open to discussing new opportunities, data projects, or collaborations.</p>
            <div className="contact__links">
              <a href="mailto:phanivardhanvadla@gmail.com" className="contact__link">
                <FiMail /><span>phanivardhanvadla@gmail.com</span>
              </a>
              <a href="tel:+919603251850" className="contact__link">
                <FiPhone /><span>+91-9603251850</span>
              </a>
              <a href="https://linkedin.com/in/phanivardhan" target="_blank" rel="noreferrer" className="contact__link">
                <FiLinkedin /><span>linkedin.com/in/phanivardhan</span>
              </a>
              <a href="https://github.com/PhanivardhanV7" target="_blank" rel="noreferrer" className="contact__link">
                <FiGithub /><span>github.com/PhanivardhanV7</span>
              </a>
              <div className="contact__link">
                <FiMapPin /><span>Anantapur, Andhra Pradesh</span>
              </div>
            </div>
          </div>
          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__row">
              <div className="contact__field">
                <input ref={nameRef} type="text" placeholder="Your Name" required />
              </div>
              <div className="contact__field">
                <input ref={emailRef} type="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="contact__field">
              <input ref={subjectRef} type="text" placeholder="Subject" required />
            </div>
            <div className="contact__field">
              <textarea ref={msgRef} rows={5} placeholder="Your Message" required />
            </div>
            <div className="contact__btns">
              <button type="submit" className="btn-primary">
                Send Email <FiSend />
              </button>
              <button type="button" className="btn-wa" onClick={handleWhatsApp}>
                <i className="fab fa-whatsapp" /> WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
