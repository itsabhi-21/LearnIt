'use client'

import { useState } from 'react'
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Award,
  Users,
  Settings,
  Sparkles,
  GraduationCap,
} from 'lucide-react'
import NavItem from './NavItem'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: BookOpen, label: 'Courses' },
  { icon: BarChart2, label: 'Progress' },
  { icon: Award, label: 'Achievements' },
  { icon: Users, label: 'Community' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <nav className="hidden md:flex flex-col h-screen w-64 bg-[#0f0f1a] border-r border-white/[0.05] py-6 px-6">
      {/* Logo */}
      <div className="flex items-center gap-3 px-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
          <GraduationCap size={22} className="text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">LearnOS</h1>
          <p className="text-xs text-slate-500">Dashboard v2.0</p>
        </div>
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
          />
        ))}
      </div>

      {/* Upgrade Card */}
      <div className="mt-4 p-4 rounded-xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
        <div className="flex items-start gap-2 mb-3">
          <Sparkles size={18} className="text-indigo-400" />
          <div>
            <p className="text-sm font-semibold text-white mb-1">Upgrade to Pro</p>
            <p className="text-xs text-slate-400">Unlock advanced features</p>
          </div>
        </div>
        <button className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all">
          Get Pro
        </button>
      </div>

      {/* User Profile */}
      <div className="mt-4 p-3 rounded-xl bg-[#1a1a2e]/50 border border-white/[0.05] flex items-center gap-3 cursor-pointer hover:bg-[#1a1a2e] transition-colors">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold">
          AB
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white truncate">Abhinav</p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
            <p className="text-xs text-slate-500">Premium</p>
          </div>
        </div>
      </div>
    </nav>
  )
}