import { Suspense } from 'react'
import { supabase } from '@/lib/supabase'
import { Course } from '@/types'
import HeroTile from '@/components/bento/HeroTile'
import CourseTile from '@/components/bento/CourseTile'
import ActivityTile from '@/components/bento/ActivityTile'
import BentoGrid from '@/components/bento/BentoGrid'
import SkeletonTile from '@/components/bento/SkeletonTile'

async function Courses() {
  if (!supabase) {
    return (
      <div className="col-span-full text-slate-500 text-sm text-center py-12 px-6 rounded-[22px] border border-white/[0.06] bg-gradient-to-br from-[#12121d]/80 via-[#0d0d14] to-[#0a0a0f] shadow-xl">
        <div className="max-w-md mx-auto space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-400/30 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <p className="text-slate-300 font-semibold text-base">Supabase Not Configured</p>
          <p className="text-slate-600 text-xs leading-relaxed">Please check your environment variables and ensure Supabase is properly set up.</p>
        </div>
      </div>
    )
  }

  const { data, error } = await supabase
    .from('courses')
    .select('*')
    .order('created_at', { ascending: true })

  console.log('Supabase data:', data)
  console.log('Supabase error:', error)

  if (error) throw new Error(error.message)
  if (!data || data.length === 0) {
    return (
      <div className="col-span-full text-slate-500 text-sm text-center py-12 px-6 rounded-[22px] border border-white/[0.06] bg-gradient-to-br from-[#12121d]/80 via-[#0d0d14] to-[#0a0a0f] shadow-xl">
        <div className="max-w-md mx-auto space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-400/30 flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📚</span>
          </div>
          <p className="text-slate-300 font-semibold text-base">No Courses Found</p>
          <p className="text-slate-600 text-xs leading-relaxed">Add some courses to your Supabase table to see them here.</p>
        </div>
      </div>
    )
  }

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
    <div className="flex flex-col gap-8 animate-in fade-in duration-700">
      {/* Row 1: Hero + Activity side by side */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <HeroTile />
        </div>
        <div className="lg:col-span-1">
          <ActivityTile />
        </div>
      </div>

      {/* Row 2: Course tiles grid */}
      <BentoGrid>
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
      </BentoGrid>
    </div>
  )
}