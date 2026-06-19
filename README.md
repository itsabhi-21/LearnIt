# LearnIt - Next-Gen Learning Dashboard

## Tech Stack
- **Next.js 15** (App Router)
- **Supabase** (PostgreSQL + SSR)
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**

## Architecture Decisions

### Server / Client Split
- `app/page.tsx` is a Server Component — fetches Supabase data directly
- `Courses()` is an async Server Component wrapped in `<Suspense>`
- All animation components are Client Components (`'use client'`)

### Data Fetching
- Course data fetched server-side via `@supabase/supabase-js`
- `<Suspense>` boundary shows skeleton loaders while data loads
- Graceful error handling if DB connection fails

### Animations
- Staggered entrance via Framer Motion `variants` + `staggerChildren`
- Spring physics on all hover states (`stiffness: 300, damping: 20`)
- Sidebar uses `layoutId` for active item highlight animation
- Progress bars animate from 0 to value on mount

## Setup

1. Clone the repo
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in your Supabase credentials
4. Run: `npm run dev`

## Environment Variables
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

## Database Schema
\`\`\`sql
create table courses (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  progress integer not null,
  icon_name text not null,
  created_at timestamp default now()
);