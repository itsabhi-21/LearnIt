'use client'

import { useState } from 'react'
import { useEffect } from 'react'
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  GraduationCap,
} from 'lucide-react'
import NavItem from './NavItem'
import { USER_PROFILE } from '@/lib/user'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', targetId: 'dashboard-section' },
  { icon: BookOpen, label: 'Courses', targetId: 'courses-section' },
  { icon: BarChart2, label: 'Progress', targetId: 'progress-section' },
  { icon: Settings, label: 'Settings' },
]

const sectionToNavMap: Record<string, string> = {
  'dashboard-section': 'Dashboard',
  'courses-section': 'Courses',
  'progress-section': 'Progress',
}

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard')
  const [collapsed, setCollapsed] = useState(false)

  // Auto-collapse on tablet widths (768 - 1023px)
  useEffect(() => {
    function update() {
      const w = window.innerWidth
      if (w >= 768 && w < 1024) setCollapsed(true)
      else setCollapsed(false)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    const main = document.querySelector('main')
    if (!main) return

    const sectionIds = ['dashboard-section', 'courses-section', 'progress-section']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]

    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (!visibleEntries.length) return

        const mostVisible = visibleEntries.reduce((prev, current) =>
          current.intersectionRatio > prev.intersectionRatio ? current : prev
        )

        const nextActive = sectionToNavMap[mostVisible.target.id]
        if (nextActive) {
          setActiveItem(nextActive)
        }
      },
      {
        root: main,
        threshold: [0.35, 0.5, 0.75],
      }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`hidden md:flex flex-col h-screen bg-[#0f0f1a] border-r border-white/5 py-6 transition-all ${collapsed ? 'w-20 px-2' : 'w-64 px-6'}`}>
      {/* Logo */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <GraduationCap size={22} className="text-white" />
          </div>
          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold text-white">LearnOS</h1>
              <p className="text-xs text-slate-500">Dashboard v2.0</p>
            </div>
          )}
        </div>

        <button
          onClick={() => setCollapsed((s) => !s)}
          aria-label="Toggle sidebar"
          className="p-1 rounded-md text-slate-300 hover:bg-white/5"
        >
          {collapsed ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-300"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-300"><path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          )}
        </button>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
            targetId={item.targetId}
            collapsed={collapsed}
          />
        ))}
      </div>


      {/* User Profile */}
      <div className={`mt-4 p-3 rounded-xl bg-[#1a1a2e]/50 border border-white/5 flex items-center gap-3 cursor-pointer hover:bg-[#1a1a2e] transition-colors ${collapsed ? 'justify-center' : ''}`}>
        <div className="w-10 h-10 rounded-full bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">{USER_PROFILE.initials}</div>
        {!collapsed && (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">{USER_PROFILE.name}</p>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
              <p className="text-xs text-slate-500">{USER_PROFILE.subscription}</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}