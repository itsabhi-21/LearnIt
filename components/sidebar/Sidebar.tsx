'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Settings,
  ChevronRight,
  GraduationCap,
  Sparkles,
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
      animate={{ width: isCollapsed ? 80 : 260 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="relative hidden md:flex flex-col h-screen bg-gradient-to-b from-[#0e0e16] via-[#0b0b10] to-[#08080d] border-r border-white/[0.06] px-4 py-7 shrink-0 shadow-2xl"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.03] via-transparent to-purple-500/[0.03] pointer-events-none" />
      
      {/* Animated glow */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-indigo-500/5 to-transparent pointer-events-none" />

      {/* Logo */}
      <div className="relative z-10 flex items-center gap-3.5 px-3 mb-12">
        <motion.div 
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 flex items-center justify-center shadow-xl shadow-indigo-500/40 shrink-0"
        >
          <GraduationCap size={22} className="text-white" strokeWidth={2.5} />
        </motion.div>
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col"
            >
              <span className="text-[19px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-200 tracking-tight leading-none">
                LearnOS
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide mt-0.5">Dashboard v2.0</span>
            </motion.div>
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

      {/* Premium badge */}
      {!isCollapsed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="relative z-10 mb-4 p-4 rounded-[18px] bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-400/20 overflow-hidden"
        >
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-amber-500/20 rounded-full blur-[50px]" />
          <div className="relative z-10 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/30 to-orange-500/20 border border-amber-400/30 flex items-center justify-center shadow-lg">
              <Sparkles size={18} className="text-amber-300" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold text-amber-200 mb-1">Upgrade to Pro</p>
              <p className="text-[11px] text-slate-500 leading-relaxed">Unlock advanced analytics</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* User section at bottom */}
      {!isCollapsed && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          className="relative z-10 p-3.5 rounded-[16px] bg-white/[0.04] border border-white/[0.06] cursor-pointer hover:bg-white/[0.06] transition-colors"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-indigo-500 via-purple-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold shadow-xl shadow-indigo-500/30">
              AB
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-100 truncate">Abhinav</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                <p className="text-xs text-slate-500 font-medium">Premium</p>
              </div>
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
        className="absolute -right-3.5 top-12 w-7 h-7 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#13131f] border border-white/[0.15] flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-400/40 hover:shadow-lg hover:shadow-indigo-500/20 transition-all shadow-xl z-20"
      >
        <motion.div
          animate={{ rotate: isCollapsed ? 0 : 180 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronRight size={15} strokeWidth={2.5} />
        </motion.div>
      </motion.button>
    </motion.nav>
  )
}