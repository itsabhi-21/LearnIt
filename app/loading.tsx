import SkeletonTile from '@/components/bento/SkeletonTile'

export default function Loading() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-700">
      {/* Hero + Activity skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Hero skeleton */}
        <div className="lg:col-span-2 rounded-3xl p-10 bg-linear-to-br from-[#0f0f1a] via-[#0d0d14] to-[#0a0a0f] border border-white/8 min-h-70 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/2 to-transparent animate-[shimmer_2s_infinite]" />
          <div className="space-y-4 relative z-10">
            <div className="h-4 w-32 rounded-md bg-white/5 animate-pulse" />
            <div className="h-10 w-72 rounded-lg bg-white/5 animate-pulse" />
            <div className="h-3 w-56 rounded-md bg-white/5 animate-pulse" />
            <div className="flex gap-3 mt-8">
              <div className="h-10 w-36 rounded-xl bg-white/5 animate-pulse" />
              <div className="h-10 w-36 rounded-xl bg-white/5 animate-pulse" />
              <div className="h-10 w-28 rounded-xl bg-white/5 animate-pulse" />
            </div>
          </div>
        </div>
        
        {/* Activity skeleton */}
        <div className="lg:col-span-1 rounded-3xl p-7 bg-linear-to-br from-[#0f0f1a] via-[#0d0d14] to-[#0a0a0f] border border-white/8 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/2 to-transparent animate-[shimmer_2s_infinite]" />
          <div className="relative z-10 space-y-4">
            <div className="h-5 w-40 rounded-md bg-white/5 animate-pulse" />
            <div className="flex gap-1.5">
              {Array.from({ length: 15 }).map((_, i) => (
                <div key={i} className="flex flex-col gap-1.5">
                  {Array.from({ length: 7 }).map((_, j) => (
                    <div key={j} className="w-2.75 h-2.75 rounded-[3px] bg-white/5 animate-pulse" />
                  ))}
                </div>
              ))}
            </div>
            <div className="h-3 w-48 rounded-md bg-white/5 animate-pulse mt-6" />
          </div>
        </div>
      </div>

      {/* Course skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonTile key={i} />
        ))}
      </div>
    </div>
  )
}