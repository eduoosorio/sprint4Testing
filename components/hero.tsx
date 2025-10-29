import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-neutral-900 -z-10" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new_sky-removebg-preview-5jGB5nxyphyMrCPw72L70fQunvx6wT.png"
            alt="Sky Sneakers"
            className="h-24 md:h-32 object-contain"
          />
        </div>

        {/* Main heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-tight">
            Seu estilo começa nos pés
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 font-light">
            Tênis originais e réplicas premium para quem entende de moda
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-8">
          <Button
            asChild
            size="lg"
            className="group relative px-8 md:px-12 py-4 md:py-5 bg-gold text-black font-bold text-lg md:text-xl rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-gold/50"
          >
            <Link href="/products">
              <span className="relative z-10">Ver Catálogo</span>
              <div className="absolute inset-0 bg-gold/80 -z-10 group-hover:scale-110 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
