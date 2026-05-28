# 🚀 Phani Vardhan Vadla — Portfolio

A cinematic 3D portfolio built with **React**, **Three.js**, **GSAP**, and **TypeScript**. Features a floating avatar, animated particle background, scroll-triggered animations, and a custom cursor.

---

## 🌐 Live Demo

> Deploy via Vercel or Netlify for best performance.

---

## 📁 Project Structure

```
portfolio-react/
├── public/
│   └── Avatar.png          # 3D avatar image
├── src/
│   ├── components/
│   │   ├── Navbar.tsx       # Fixed navigation with mobile menu
│   │   ├── Hero.tsx         # Hero section with 3D scene + avatar
│   │   ├── About.tsx        # About section with animated stats
│   │   ├── Experience.tsx   # Work experience timeline
│   │   ├── Skills.tsx       # Technical skills grid
│   │   ├── Projects.tsx     # Featured projects
│   │   ├── Education.tsx    # Education & certifications
│   │   ├── Contact.tsx      # Contact form
│   │   ├── Footer.tsx       # Footer
│   │   └── Cursor.tsx       # Custom cursor
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.ts
```

---

## ✨ Features

- **3D Particle Background** — Two thousand animated particles with connecting lines using Three.js
- **Floating Avatar** — Mouse parallax, glow rings, floating skill badges (Power BI, Excel, Python, SQL)
- **Custom Cursor** — Dot + ring cursor with hover scale effects
- **GSAP Scroll Animations** — Sections animate in with 3D perspective on scroll
- **Typing Effect** — Cycles through roles in the hero section
- **3D Tilt Cards** — Experience, skill, and project cards tilt on hover
- **Cinematic Dark Theme** — Deep dark background with purple/cyan accent palette
- **Grain Overlay** — Subtle film grain texture for cinematic feel
- **Mobile Responsive** — Fully responsive with hamburger menu
- **Contact Form** — Email and WhatsApp integration

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool |
| Three.js | 3D particle background |
| @react-three/fiber | React renderer for Three.js |
| @react-three/drei | Three.js helpers (Float, Bloom, etc.) |
| @react-three/postprocessing | Bloom glow effect |
| GSAP + ScrollTrigger | Scroll animations |
| react-icons | Icon library |
| framer-motion | Additional animations |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/PhanivardhanV7/Phanivardhan_Portfolio.git
cd Phanivardhan_Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173/` in your browser.

### Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder.

---

## 🎨 Customization

- **Avatar** — Replace `public/Avatar.png` with your own image
- **Content** — Update each component in `src/components/` with your details
- **Colors** — Edit CSS variables in `src/index.css` under `:root`
- **Resume** — Replace `public/Phanivardhan_V.pdf` with your resume

---

## 📄 License

MIT License — free to use and modify with attribution.

---

*Built with ❤️ by Phani Vardhan Vadla*
