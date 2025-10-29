"use client"

import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { UserNav } from "@/components/auth/user-nav"
import { useCart } from "@/hooks/use-cart"

export function Header() {
  const { items } = useCart()
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new_sky-removebg-preview-5jGB5nxyphyMrCPw72L70fQunvx6wT.png"
            alt="Sky Sneakers"
            width={80}
            height={50}
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/#exclusivos" className="transition-colors hover:text-primary">
            Exclusivos
          </Link>
          <Link href="/#originais" className="transition-colors hover:text-primary">
            Originais
          </Link>
          <Link href="/#replicas" className="transition-colors hover:text-primary">
            Réplicas Premium
          </Link>
          <Link href="/products" className="transition-colors hover:text-primary">
            Todos os Produtos
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="relative">
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </Button>
          <UserNav />
        </div>
      </div>
    </header>
  )
}
