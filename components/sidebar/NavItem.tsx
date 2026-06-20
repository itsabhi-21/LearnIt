'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface NavItemProps {
  icon: LucideIcon
  label: string
  isActive: boolean
  onClick: () => void
  targetId?: string
  collapsed?: boolean
}

export default function NavItem({
  icon: Icon,
  label,
  isActive,
  onClick,
  targetId,
  collapsed = false,
}: NavItemProps) {
  const handleClick = () => {
    if (targetId) {
      const target = document.getElementById(targetId)
      target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    onClick()
  }

  return (
    <motion.button
      onClick={handleClick}
      title={collapsed ? label : undefined}
      className={`relative flex items-center ${collapsed ? 'justify-center' : 'gap-3'} w-full px-3 py-2.5 rounded-xl cursor-pointer group`}
      whileHover={{ x: 2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Active background */}
      {isActive && (
        <motion.div
          layoutId="active-nav"
          className="absolute inset-0 rounded-xl bg-indigo-600"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}

      <span
        className={`relative z-10 transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}
      >
        <Icon size={20} strokeWidth={2} />
      </span>

      {!collapsed && (
        <span
          className={`relative z-10 text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'}`}
        >
          {label}
        </span>
      )}
      
      {isActive && label === 'Dashboard' && (
        <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white relative z-10" />
      )}
    </motion.button>
  )
}