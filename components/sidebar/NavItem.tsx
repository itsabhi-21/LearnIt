'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface NavItemProps {
  icon: LucideIcon
  label: string
  isActive: boolean
  isCollapsed: boolean
  onClick: () => void
}

export default function NavItem({
  icon: Icon,
  label,
  isActive,
  isCollapsed,
  onClick,
}: NavItemProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative flex items-center gap-3 w-full px-3.5 py-3 rounded-xl cursor-pointer group"
      whileHover={{ scale: 1.02, x: 2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {/* Active background highlight using layoutId */}
      {isActive && (
        <motion.div
          layoutId="active-nav"
          className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500/20 to-purple-500/15 border border-indigo-400/30 shadow-lg shadow-indigo-500/20"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}

      {/* Hover background for non-active items */}
      {!isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 rounded-xl bg-white/[0.04]"
          transition={{ duration: 0.2 }}
        />
      )}

      <span 
        className={`relative z-10 transition-colors duration-200 ${
          isActive 
            ? 'text-indigo-300 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]' 
            : 'text-slate-400 group-hover:text-slate-300'
        }`}
      >
        <Icon size={20} strokeWidth={2.5} />
      </span>

      <AnimatePresence>
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
              isActive ? 'text-indigo-200' : 'text-slate-400 group-hover:text-slate-300'
            }`}
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}