'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
} from 'lucide-react'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: BookOpen, label: 'Courses' },
  { icon: BarChart2, label: 'Progress' },
  { icon: Settings, label: 'Settings' },
]

export default function MobileNav() {
  const [active, setActive] = useState('Dashboard')

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0d0d14]/95 backdrop-blur-2xl border-t border-white/[0.08] px-2 py-3 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
      {/* Gradient accent on top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label
          return (
            <motion.button
              key={item.label}
              onClick={() => setActive(item.label)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="relative flex flex-col items-center gap-1.5 px-4 py-2 min-w-[70px]"
            >
              {isActive && (
                <motion.div
                  layoutId="mobile-active"
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/25 to-purple-500/20 border border-indigo-400/30"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <Icon
                size={22}
                strokeWidth={2.5}
                className={`relative z-10 transition-all duration-200 ${
                  isActive 
                    ? 'text-indigo-300 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]' 
                    : 'text-slate-500'
                }`}
              />
              <span
                className={`relative z-10 text-[11px] font-medium transition-colors duration-200 ${
                  isActive ? 'text-indigo-200' : 'text-slate-500'
                }`}
              >
                {item.label}
              </span>
            </motion.button>
          )
        })}
      </div>
    </nav>
  )
}