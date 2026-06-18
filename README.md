# 🚀 LearnOS - Next-Gen Learning Dashboard

A futuristic, highly animated education platform built with Next.js, featuring hardware-accelerated animations, zero layout shifts, and a buttery-smooth user experience powered by efficient, server-rendered data from Supabase.

![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.4-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.40.0-ff69b4?style=flat-square)

## ✨ Features

<cite index="1-2,1-21,1-22">- **Zero Layout Shifts**: All hover states and entrance animations use `transform` and `opacity` exclusively to avoid browser repaints
- **Hardware-Accelerated Animations**: Powered by Framer Motion with spring physics for natural, non-linear motion</cite>
<cite index="1-7">- **Bento Grid Layout**: Modern, responsive grid system that adapts beautifully across devices</cite>
<cite index="1-32,1-33">- **Server Components**: Live data fetching using Next.js Server Components (RSC) with Supabase</cite>
- **Dark Mode Excellence**: Deep background tones with subtle glowing gradients
- **Semantic HTML**: Proper use of `<nav>`, `<main>`, `<article>`, and `<section>` elements
- **Responsive Design**: Fully responsive from mobile to desktop with adaptive layouts
<cite index="1-34">- **Loading States**: Suspense boundaries with skeleton loaders featuring pulsing animations</cite>

## 🎨 Design Highlights

- **Premium Gradient System**: Multi-layered gradients with animated glowing orbs
- **Glassmorphism Effects**: Backdrop blur and translucent surfaces
- **Micro-interactions**: Hover states with spring physics and scale transforms
<cite index="1-43">- **Layout Animations**: Sidebar navigation with `layoutId` for smooth background highlights</cite>
- **Custom Progress Bars**: Animated progress indicators with shimmer effects
- **Grain Textures**: Subtle noise overlays for depth and texture

## 🛠️ Tech Stack

<cite index="1-15,1-16,1-17,1-18,1-19">- **Framework**: Next.js 16 (App Router)
- **Database**: Supabase PostgreSQL
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React</cite>
- **Language**: TypeScript
- **Font**: Geist (Vercel's new font family)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd learning-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

<cite index="1-27,1-28">4. **Set up Supabase database**
   
   Create a `courses` table with the following schema:
   ```sql
   create table courses (
     id uuid primary key default uuid_generate_v4(),
     title text not null,
     progress integer not null check (progress >= 0 and progress <= 100),
     icon_name text not null,
     created_at timestamp with time zone default now()
   );
   ```</cite>

<cite index="1-30">5. **Seed sample data**
   ```sql
   insert into courses (title, progress, icon_name) values
     ('Advanced React Patterns', 75, 'Code2'),
     ('Next.js App Router Deep Dive', 40, 'Zap'),
     ('TypeScript Fundamentals', 90, 'FileCode'),
     ('Tailwind CSS Mastery', 55, 'Palette');
   ```</cite>

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with sidebar
│   ├── page.tsx            # Main dashboard page
│   ├── loading.tsx         # Loading skeleton
│   ├── error.tsx           # Error boundary
│   └── globals.css         # Global styles & animations
├── components/
│   ├── bento/
│   │   ├── HeroTile.tsx    # Welcome hero section
│   │   ├── CourseTile.tsx  # Dynamic course cards
│   │   ├── ActivityTile.tsx # Contribution graph
│   │   ├── BentoGrid.tsx   # Grid container
│   │   └── SkeletonTile.tsx # Loading skeleton
│   ├── sidebar/
│   │   ├── Sidebar.tsx     # Desktop navigation
│   │   ├── MobileNav.tsx   # Mobile bottom nav
│   │   └── NavItem.tsx     # Navigation item component
│   └── ui/
│       └── ProgressBar.tsx # Animated progress bar
├── lib/
│   └── supabase.ts         # Supabase client config
└── types/
    └── index.ts            # TypeScript interfaces
```

## 🎯 Key Components

<cite index="1-9,1-10,1-11">### Hero Tile
Large greeting tile with daily learning streak indicator, active courses count, and XP display

### Course Tiles
Dynamic tiles displaying active courses fetched from Supabase with animated progress bars

### Activity Tile
GitHub-style contribution graph showing learning activity over 15 weeks</cite>

## 🔧 Architectural Decisions

### Server/Client Component Split

<cite index="1-32">- **Server Components**: Main page component fetches data from Supabase
- **Client Components**: All Bento tiles and interactive elements use Framer Motion</cite>
- **Suspense Boundaries**: Wrap async data fetching for progressive loading

### Animation Strategy

<cite index="1-38,1-39,1-40,1-41,1-42">- **Staggered Page Load**: Tiles animate in sequentially with fade + translate
- **Card Hovers**: Scale transforms (1-2%) with spring physics
- **Border Glows**: Gradient shifts on hover using smooth transitions
- **Spring Physics**: `stiffness: 300-400, damping: 17-25` for natural feel</cite>

### Performance Optimizations

- Hardware-accelerated CSS properties only
- Proper use of `will-change` implicit via Framer Motion
- Efficient re-renders with React Server Components
- Image optimization with Next.js Image component (when applicable)

## 🚀 Deployment

<cite index="1-78">Deploy easily on Vercel:</cite>

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

## 🎨 Customization

### Colors
Edit the gradient maps in component files:
- `HeroTile.tsx` - Hero section colors
- `CourseTile.tsx` - Course card color cycles
- `ActivityTile.tsx` - Activity graph colors

### Animations
Adjust spring physics in Framer Motion:
```tsx
transition={{ type: 'spring', stiffness: 300, damping: 20 }}
```

### Layout
Modify grid layouts in `app/page.tsx`:
```tsx
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
```

## 📝 License

MIT

## 🙏 Acknowledgments

- Design inspired by modern learning platforms
- Built as part of the Frontend Intern Challenge
- Powered by Next.js, Supabase, and Framer Motion

---

Built with ❤️ by Abhinav
