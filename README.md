# THE EDITOR'S CUT — Premium Video Editor Portfolio

A cinematic, highly creative portfolio website for professional video editors. This portfolio breaks away from generic freelancer templates and feels like an edited piece of video itself.

## 🎬 Features

- **Immersive Hero Section** with "EVERY FRAME HAS A REASON" reveal
- **Interactive Work Grid** with hover-triggered video previews
- **Before/After Slider** with draggable comparison interface
- **Rhythm & Craft Section** showcasing editing philosophy with timeline-inspired UI
- **Custom Cursor** that responds to interactive elements (PLAY, DRAG, VIEW, SCRUB)
- **Cinematic Contact Section** styled like film credits
- **Full Responsive Design** optimized for desktop, tablet, and mobile
- **Dark cinematic theme** with subtle film grain texture
- **Smooth animations** using Framer Motion
- **Editorial navigation** that feels premium, not corporate

## 🚀 Getting Started

### Install dependencies:
```bash
npm install
```

### Run development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production:
```bash
npm run build
npm start
```

## 📝 Customization Guide

### 1. Update Editor Information

Replace all `[EDITOR NAME]` placeholders throughout the site:
- `src/app/layout.tsx` — Page title and meta description
- `src/components/hero/Hero.tsx` — Hero section name
- `src/components/contact/Contact.tsx` — Footer credits
- `src/components/ui/Navigation.tsx` — Logo

### 2. Add Real Projects

Edit `src/data/projects.ts`:
- Update project titles, categories, descriptions
- Add client names and roles
- Link to actual video files
- Add case studies with brief/problem/approach/craft details

### 3. Replace Placeholder Videos & Images

See `public/ASSETS_README.md` for a complete list of video and image assets to replace.

Place your videos in `/public/videos/`  
Place your images in `/public/images/`

### 4. Update Contact Links

Edit `src/components/contact/Contact.tsx`:
- Replace email, Instagram, Twitter, WhatsApp links
- Add or remove social platforms as needed

### 5. Customize About Section

Edit `src/components/about/About.tsx`:
- Write your personal editing philosophy
- Update tools/software list
- Add specializations

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **Lucide React** (icons)

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Homepage assembling all sections
│   └── globals.css     # Global styles and film grain effect
├── components/         # React components
│   ├── hero/          # Hero section
│   ├── work/          # Portfolio grid
│   ├── before-after/  # Comparison slider
│   ├── rhythm/        # Timeline craft showcase
│   ├── about/         # About section
│   ├── contact/       # Contact section
│   └── ui/            # Reusable UI (Navigation, CustomCursor)
├── data/              # Project data and content
│   └── projects.ts    # Portfolio content (EDIT THIS!)
├── types/             # TypeScript type definitions
│   └── index.ts
└── hooks/             # Custom React hooks
    └── useMousePosition.ts

public/
├── videos/            # Video assets
├── images/            # Image assets
└── ASSETS_README.md   # Asset replacement guide
```

## 🎨 Design Philosophy

This portfolio communicates:
- **Editing skill through interaction design** — pacing, rhythm, transitions
- **Premium, cinematic aesthetic** — dark theme, film grain, generous spacing
- **Editorial typography** — strong hierarchy, minimal but impactful
- **Purposeful motion** — every animation serves a function

## 📱 Responsive Design

The site adapts gracefully:
- Desktop: Full interactive experience with custom cursor
- Tablet: Touch-optimized interactions
- Mobile: Clean, streamlined layout with drawer navigation

## 🎯 Important Notes

- **Video files should be optimized** — use compressed MP4s for web
- **Add poster images** — prevents layout shift while videos load
- **Lazy loading is built-in** — videos load as needed
- **All placeholder text is clearly marked** — search for `[Placeholder:` to find them

## 📄 License

This is a custom-built portfolio. Feel free to use and customize.

---

**Built with precision. Edited with purpose.**
