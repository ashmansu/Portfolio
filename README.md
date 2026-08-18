# Modern Personal Portfolio Website

A modern, fully responsive, and mobile-first personal portfolio website built with semantic HTML5, fluid CSS3, and vanilla JavaScript. Features live theme switching, direct email clipboard copying, interactive project case study modals, and a live profile visual customizer.

---

## 🚀 Quick Start

Simply open `index.html` in any web browser, or serve it locally using any HTTP server:

```bash
# Option 1: Double-click index.html or open via browser

# Option 2: Python HTTP server
python -m http.server 8000

# Option 3: Node npx serve
npx serve .
```

---

## 🎨 Theme System

The portfolio includes 4 pre-built high-contrast design themes accessible via the top navigation dropdown:

1. **🌙 Dark Tech**: Deep dark navy with cyan accents & glassmorphic navigation (Default).
2. **📰 Warm Editorial**: Soft paper backdrop with rich terracotta accents & editorial typography.
3. **⚡ Clean Minimal**: Crisp white canvas with vibrant blue accents & subtle border styling.
4. **🤖 Cyber Glow**: Deep midnight black with emerald green & purple neon accents.

---

## ⚡ Key Features

- **Sequential Section Flow**:
  1. **Hero**: One-line value proposition, role, location/timezone badge, and dual CTAs (`View Projects`, `Contact Me`).
  2. **Featured Projects**: Responsive grid with thumbnail previews, 2-sentence impact descriptions, tech badges, and modal triggers.
  3. **About Me**: 4-sentence bio detailing professional philosophy, background, and recruiter focus.
  4. **Skills & Tools**: Domain-grouped cards for Languages, Frameworks, Design, and DevOps.
  5. **Contact & Footer**: Real-time validated contact form, direct email copy button with toast alert, and social links.
- **Live Profile Customizer**: Click the **Customize** button in the header bar to edit your name, job title, value prop, bio sentences, and contact details live in your browser.
- **Zero External Dependencies**: Lightweight (<50KB total bundle size) for sub-50ms page load speeds.
- **WCAG AA Accessible**: High-contrast ratios, semantic HTML5, aria labels, keyboard navigation support.

---

## 🌐 Deployment Options

### 1. GitHub Pages
1. Push this folder to a GitHub repository.
2. Go to **Settings > Pages**.
3. Select `main` branch as the source and click **Save**.

### 2. Netlify / Vercel
- Drag and drop this folder directly into the Netlify / Vercel dashboard. No build command required!
