"use client"
import Hero from "@/components/hero"
import ScrollShowcase from "@/components/scroll-showcase"
import CTA from "@/components/cta"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-black text-white">
        <Hero />
        <ScrollShowcase />
        <CTA />
      </div>
    </>
  )
}
