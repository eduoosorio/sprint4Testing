import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram } from "lucide-react"

export default function CTA() {
  return (
    <section className="bg-black border-t border-gold/20 py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-white">Siga o hype</h2>
          <p className="text-xl text-neutral-400">Entre pro movimento Sky Sneakers</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center items-center pt-8">
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-green-600/50"
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/50"
          >
            <a
              href="https://instagram.com/skysneakers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="h-5 w-5" />
              Instagram
            </a>
          </Button>
        </div>

        {/* Footer */}
        <div className="pt-12 border-t border-gold/20 text-neutral-500 text-sm space-y-2">
          <p>© 2025 Sky Sneakers. Todos os direitos reservados.</p>
          <p>Qualidade premium, preços acessíveis</p>
        </div>
      </div>
    </section>
  )
}
