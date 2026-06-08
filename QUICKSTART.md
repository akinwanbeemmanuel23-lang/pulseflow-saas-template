# ⚡ 5-Minute Quick Start Guide

Get your SaaS landing page live in under 5 minutes!

---

## Step 1: Install (30 seconds)

```bash
# Unzip the template, then:
cd pulseflow-template
npm install
```

---

## Step 2: Run Locally (10 seconds)

```bash
npm run dev
```

Open **http://localhost:5173** — you'll see the template! 🎉

---

## Step 3: Customize Content (2-3 minutes)

### Change Your Brand Name

Open `src/components/Navbar.tsx`, find line ~20:
```tsx
Pulse<span className="gradient-text">Flow</span>
```
Change to your brand name.

### Change Hero Text

Open `src/components/Hero.tsx`, find the headline:
```tsx
Automate Your Workflows.
<span className="gradient-text">10x Your Productivity.</span>
```
Change to your headline.

### Change Colors

Open `src/index.css`, edit these values:
```css
--color-primary-500: #8b5cf6;  /* Main purple - change this */
--color-accent-500: #0ea5e9;   /* Blue accent - change this */
```

---

## Step 4: Deploy FREE (1 minute)

### Option A: Vercel (Easiest)

1. Push to GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select your repo
5. Click "Deploy"
6. Done! Your site is live ✅

### Option B: Netlify

1. Run `npm run build`
2. Go to netlify.com
3. Drag `/dist` folder to Netlify
4. Done! Your site is live ✅

---

## 🎨 Quick Customization Cheatsheet

| What to Change | File Location |
|----------------|---------------|
| Brand name | `Navbar.tsx`, `Footer.tsx` |
| Hero headline | `Hero.tsx` |
| Features | `Features.tsx` (edit `features` array) |
| Pricing | `Pricing.tsx` (edit `plans` array) |
| Testimonials | `Testimonials.tsx` (edit `testimonials` array) |
| FAQ | `FAQ.tsx` (edit `faqs` array) |
| Colors | `index.css` (CSS variables) |
| Images | `/public/images/` folder |
| Page title | `index.html` |

---

## Need Help?

📧 Email: your@email.com

I typically respond within 24 hours!

---

Enjoy your new landing page! 🚀
