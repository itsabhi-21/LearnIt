'use client'

import { Search, Bell, Calendar } from 'lucide-react'

const today = new Date()
const formattedDate = today.toLocaleDateString('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
})

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white mb-1">Dashboard</h1>
        <p className="text-sm text-slate-500">{formattedDate} · Your daily summary</p>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input
            type="text"
            placeholder="Search courses..."
            className="w-64 bg-[#1a1a2e]/50 border border-white/5 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
          />
        </div>
        
        {/* Icons */}
        <button className="w-10 h-10 rounded-xl bg-[#1a1a2e]/50 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 transition-colors relative">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full"></span>
        </button>
        
        <button className="w-10 h-10 rounded-xl bg-[#1a1a2e]/50 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/30 transition-colors">
          <Calendar size={18} />
        </button>
      </div>
    </header>
  )
}
