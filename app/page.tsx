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

export default async function DashboardPage() {
  let courses: Course[] = []

  try {
    if (supabase) {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: true })

      if (error) throw error
      courses = (data || []) as Course[]
    }
  } catch (err: unknown) {
    // Let the error boundary handle it
    const message = err instanceof Error ? err.message : String(err)
    throw new Error(message || 'Failed to load courses')
  }

  return (
    <div className="h-full flex gap-6">

      {/* LEFT: Main content */}
      <div className="flex-1 flex flex-col gap-5 min-w-0">

        {/* Header */}
        <Header />

        {/* Hero + Daily Streak side by side */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5">
          <HeroTile courseCount={courses.length} />
          <DailyStreakCard />
        </div>

        {/* Stats row */}
        <StatsGrid />

        {/* Course tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          <Suspense
            fallback={
              <>
                {Array.from({ length: 4 }).map((_, i) => (
                  <SkeletonTile key={i} />
                ))}
              </>
            }
          >
            {courses.map((course, i) => (
              <CourseTile key={course.id} course={course} index={i} />
            ))}
          </Suspense>
        </div>

        {/* Activity + Up Next */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-5 pb-6">
          <ActivityTile />
          <UpNextCard />
        </div>

      </div>
    </div>
  )
}