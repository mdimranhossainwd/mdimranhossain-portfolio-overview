# Md. Imran Hossain — Portfolio

A modern, dark-themed portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: Sonner
- **Type animation**: react-type-animation

## Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles, design tokens
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles sections)
│
├── components/
│   ├── sections/         # Page sections (Hero, About, Skills…)
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   ├── shared/           # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/               # Reusable UI primitives
│       ├── GridBackground.tsx
│       └── SectionHeader.tsx
│
├── data/
│   └── portfolio.ts      # ✅ EDIT THIS — all content lives here
│
├── lib/
│   └── utils.ts          # cn(), animation variants, helpers
│
└── types/
    └── index.ts          # TypeScript interfaces
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

**All content** (name, projects, skills, testimonials, contact info) lives in a single file:

```
src/data/portfolio.ts
```

Edit that file — everything else updates automatically.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## Design Tokens

Colors are defined in `tailwind.config.ts`:

| Token        | Value     | Usage           |
| ------------ | --------- | --------------- |
| `brand.pink` | `#FF2D78` | Primary accent  |
| `dark.950`   | `#050508` | Page background |
| `dark.900`   | `#0A0A0F` | Navbar bg       |
| `dark.800`   | `#111118` | Cards           |

## License

free to use and modify.
