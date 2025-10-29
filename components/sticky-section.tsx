"use client"

import type { ReactNode } from "react"

interface StickySectionProps {
  children: ReactNode
  activeSection: number
}

export default function StickySection({ children, activeSection }: StickySectionProps) {
  const sections = ["Exclusivos", "Originais", "Réplicas Premium"]

  return (
    <div className="relative min-h-screen bg-black">
      <div className="flex flex-col md:flex-row">
        {/* Sticky Sidebar */}
        <div className="md:sticky md:top-0 md:h-screen md:w-1/3 bg-gradient-to-b from-neutral-950 to-black border-r border-gold/20 flex flex-col items-center justify-center p-8 md:p-12">
          <div className="space-y-8 w-full">
            {/* Logo in sidebar */}
            <div className="flex justify-center mb-12">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anjo_sky-removebg-preview-vdZHxioJNZECk0PcwKtxrGGC7ha3FV.png"
                alt="Sky Sneakers Angel"
                className="h-20 md:h-24 object-contain"
              />
            </div>

            {/* Navigation */}
            <nav className="space-y-4">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`text-center py-4 px-6 rounded-lg transition-all duration-300 cursor-pointer ${
                    activeSection === index
                      ? "bg-gold text-black font-bold text-lg"
                      : "text-gold/60 hover:text-gold font-semibold"
                  }`}
                >
                  {section}
                </div>
              ))}
            </nav>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent my-8" />

            {/* Info */}
            <div className="text-center text-sm text-neutral-500 space-y-2">
              <p>Siga o hype</p>
              <p className="text-gold font-semibold">Sky Sneakers</p>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="md:w-2/3 bg-black">{children}</div>
      </div>
    </div>
  )
}
