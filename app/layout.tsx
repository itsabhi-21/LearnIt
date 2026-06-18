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
  title: 'LearnOS Dashboard - Your Learning Command Center',
  description: 'A next-generation learning dashboard with beautiful animations and real-time progress tracking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geist.className} antialiased`}>
        <div className="flex h-screen overflow-hidden bg-[#08080d]">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6 md:p-10 pb-32 md:pb-10">
            <div className="max-w-[1600px] mx-auto">
              {children}
            </div>
          </main>
        </div>
        <MobileNav />
      </body>
    </html>
  )
}