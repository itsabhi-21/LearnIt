import { Suspense } from 'react'
import { supabase } from '@/lib/supabase'
import { Course } from '@/types'
import Header from '@/components/Header'
import StatsGrid from '@/components/StatsGrid'
import DailyStreakCard from '@/components/DailyStreakCard'
import UpNextCard from '@/components/UpNextCard'
import CourseTile from '@/components/bento/CourseTile'
import ActivityTile from '@/components/bento/ActivityTile'
import SkeletonTile from '@/components/bento/SkeletonTile'
import HeroTile from '@/components/bento/HeroTile'

async function Courses() {
  if (!supabase) {
    return (
      <div className="col-span-full text-slate-500 text-sm text-center py-8 px-6 rounded-2xl bg-[#1a1a2e]/50 border border-white/[0.05]">
        <p className="text-slate-400">Supabase not configured</p>
      </div>
    )
  }

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) throw new Error(error.message)
  if (!data || data.length === 0) return null

  const courses = data as Course[]
  return (
    <>
      {courses.map((course, i) => (
        <CourseTile key={course.id} course={course} index={i} />
      ))}
    </>
  )
}

export default function DashboardPage() {
  return (
    <div className="h-full flex gap-6">

      {/* LEFT: Main content */}
      <div className="flex-1 flex flex-col gap-5 min-w-0">

        {/* Header */}
        <Header />

        {/* Hero + Daily Streak side by side */}
        <div className="grid grid-cols-[1fr_300px] gap-5">
          <HeroTile />
          <DailyStreakCard />
        </div>

        {/* Stats row */}
        <StatsGrid />

        {/* Course tiles */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <Suspense
            fallback={
              <>
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonTile key={i} />
                ))}
              </>
            }
          >
            <Courses />
          </Suspense>
        </div>

        {/* Activity + Up Next */}
        <div className="grid grid-cols-[1fr_300px] gap-5 pb-6">
          <ActivityTile />
          <UpNextCard />
        </div>

      </div>
    </div>
  )
}