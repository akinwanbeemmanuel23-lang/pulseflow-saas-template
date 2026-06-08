# PulseFlow — SaaS Landing Page Template

A high-converting, production-ready SaaS landing page built with React, Vite, and Tailwind CSS.

![PulseFlow Preview](https://your-demo-url.vercel.app/preview.png)

## 🚀 Live Demo

[View Live Demo →](https://your-demo-url.vercel.app)

---

## ✨ Features

- ⚡ **Blazing Fast** — Built with Vite, loads in <1 second
- 📱 **Fully Responsive** — Perfect on mobile, tablet & desktop
- 🎨 **Easy to Customize** — Clean code, Tailwind CSS, component-based
- 🔄 **Scroll Animations** — Smooth fade-in effects on scroll
- 🎯 **Conversion Optimized** — Based on proven SaaS design patterns
- 🌙 **Modern UI** — Glass morphism, gradients, micro-interactions

---

## 📦 What's Included

```
├── Source Code (React + TypeScript)
├── All Components (13 sections)
├── Custom Animations
├── Responsive Navigation
├── Pricing Toggle (Monthly/Yearly)
├── FAQ Accordion
├── This Documentation
└── Free Updates
```

---

## 🛠️ Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Unzip the template** (or clone the repo)

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open browser:**
```
http://localhost:5173
```

5. **Build for production:**
```bash
npm run build
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx        # Sticky navigation
│   ├── Hero.tsx          # Hero section with CTA
│   ├── LogoCloud.tsx     # Trusted by logos
│   ├── ProblemSolution.tsx
│   ├── ValueProps.tsx    # Key benefits
│   ├── Features.tsx      # Feature grid
│   ├── HowItWorks.tsx    # 3-step process
│   ├── Testimonials.tsx  # Customer reviews
│   ├── Pricing.tsx       # Pricing table
│   ├── TrustSection.tsx  # Security badges
│   ├── FAQ.tsx           # Accordion FAQ
│   ├── FinalCTA.tsx      # Closing CTA
│   └── Footer.tsx        # Site footer
├── hooks/
│   └── useInView.ts      # Scroll animation hook
├── App.tsx               # Main app component
├── main.tsx              # Entry point
└── index.css             # Global styles + animations
```

---

## 🎨 Customization Guide

### Change Colors

Edit `src/index.css`:

```css
@theme {
  --color-primary-500: #8b5cf6;  /* Your primary color */
  --color-primary-600: #7c3aed;
  --color-accent-500: #0ea5e9;   /* Your accent color */
}
```

### Change Content

Each component has its content at the top of the file. For example, in `Pricing.tsx`:

```tsx
const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    // ... edit your plans here
  }
];
```

### Change Images

Replace images in `/public/images/`:
- `dashboard-preview.png` — Hero screenshot
- `dashboard-step1.png` — How it works step 1
- `dashboard-step2.png` — How it works step 2
- `dashboard-step3.png` — How it works step 3

### Change Fonts

Edit `index.html` Google Fonts link, then update `src/index.css`:

```css
body {
  font-family: 'Your Font', sans-serif;
}
```

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Go to vercel.com
3. Import repository
4. Click Deploy

### Netlify

1. Push to GitHub
2. Go to netlify.com
3. Add new site → Import from Git
4. Deploy

### Manual

```bash
npm run build
# Upload /dist folder to any static host
```

---

## 📄 License

This template is licensed for **one project**. 

✅ Use for 1 personal or client project  
✅ Modify and customize freely  
❌ Resell or redistribute the template  
❌ Use in multiple projects (buy additional license)

For extended/unlimited license, contact: your@email.com

---

## 💬 Support

Need help? Email me at: **your@email.com**

---

## 🙏 Thank You!

Thanks for purchasing! If you love this template, I'd appreciate a testimonial or tweet.

Built with ❤️ by [Your Name]
