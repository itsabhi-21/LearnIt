'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from 'lucide-react'
import NavItem from './NavItem'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard' },
  { icon: BookOpen, label: 'Courses' },
  { icon: BarChart2, label: 'Progress' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeItem, setActiveItem] = useState('Dashboard')

  return (
    <motion.nav
      animate={{ width: isCollapsed ? 76 : 240 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative hidden md:flex flex-col h-screen bg-gradient-to-b from-[#0d0d14] via-[#0b0b10] to-[#0a0a0f] border-r border-white/[0.08] px-4 py-6 shrink-0"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-purple-500/[0.02] pointer-events-none" />

      {/* Logo */}
      <div className="relative z-10 flex items-center gap-3 px-3 mb-10">
        <motion.div 
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 shrink-0"
        >
          <GraduationCap size={20} className="text-white" strokeWidth={2.5} />
        </motion.div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 tracking-tight"
            >
              LearnOS
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Nav Items */}
      <div className="relative z-10 flex flex-col gap-2 flex-1">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </div>

      {/* User section at bottom */}
      {!isCollapsed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="relative z-10 mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-indigo-500/20">
              AB
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-200 truncate">Abhinav</p>
              <p className="text-xs text-slate-500 truncate">Premium</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Collapse Toggle */}
      <motion.button
        onClick={() => setIsCollapsed(!isCollapsed)}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className="absolute -right-3 top-10 w-6 h-6 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#13131f] border border-white/[0.12] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-400/30 transition-colors shadow-lg z-20"
      >
        <motion.div
          animate={{ rotate: isCollapsed ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight size={14} strokeWidth={2.5} />
        </motion.div>
      </motion.button>
    </motion.nav>
  )
}