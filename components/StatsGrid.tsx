'use client'

import { motion } from 'framer-motion'
import { Clock, BookOpen, Award, TrendingUp } from 'lucide-react'

const stats = [
  {
    icon: Clock,
    label: 'Hours Learned',
    value: '142',
    subtext: '+3h this week',
    color: 'indigo',
    bgColor: 'from-indigo-500/10 to-indigo-600/5',
    borderColor: 'border-indigo-500/20',
    textColor: 'text-indigo-400',
    iconBg: 'bg-indigo-500/20',
  },
  {
    icon: BookOpen,
    label: 'Lessons Done',
    value: '86',
    subtext: '+5 today',
    color: 'blue',
    bgColor: 'from-blue-500/10 to-blue-600/5',
    borderColor: 'border-blue-500/20',
    textColor: 'text-blue-400',
    iconBg: 'bg-blue-500/20',
  },
  {
    icon: Award,
    label: 'XP Earned',
    value: '2,340',
    subtext: '+120 XP',
    color: 'amber',
    bgColor: 'from-amber-500/10 to-amber-600/5',
    borderColor: 'border-amber-500/20',
    textColor: 'text-amber-400',
    iconBg: 'bg-amber-500/20',
  },
  {
    icon: TrendingUp,
    label: 'Completion Rate',
    value: '78%',
    subtext: '+4% this week',
    color: 'emerald',
    bgColor: 'from-emerald-500/10 to-emerald-600/5',
    borderColor: 'border-emerald-500/20',
    textColor: 'text-emerald-400',
    iconBg: 'bg-emerald-500/20',
  },
]

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02, y: -2 }}
          className={`relative rounded-2xl p-5 overflow-hidden bg-linear-to-br ${stat.bgColor} border ${stat.borderColor} backdrop-blur-sm`}
        >
          {/* Icon */}
          <div className={`w-11 h-11 rounded-xl ${stat.iconBg} flex items-center justify-center mb-4`}>
            <stat.icon size={18} className={stat.textColor} strokeWidth={2.5} />
          </div>
          
          {/* Content */}
          <div>
            <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
            <p className="text-xs text-slate-400 mb-2">{stat.label}</p>
            <p className={`text-xs ${stat.textColor} font-medium`}>{stat.subtext}</p>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
