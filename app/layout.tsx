import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/sidebar/Sidebar'
import MobileNav from '@/components/sidebar/MobileNav'

const geist = Geist({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'LearnOS Dashboard',
  description: 'Your learning command center',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} antialiased bg-[#0a0a14]`}>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto">
            <div className="max-w-7xl mx-auto w-full px-6 py-6">
              {children}
            </div>
          </main>
        </div>
        <MobileNav />
      </body>
    </html>
  )
}