"use client"

import { useCart } from "@/hooks/use-cart"
import { CartItem } from "./cart-item"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { ShoppingBag } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function CartContent() {
  const { items, getTotalPrice } = useCart()
  const router = useRouter()
  const total = getTotalPrice()
  const shipping = total > 299 ? 0 : 29.9
  const finalTotal = total + shipping

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <ShoppingBag className="h-24 w-24 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Seu carrinho está vazio</h2>
        <p className="text-muted-foreground mb-6">Adicione produtos ao carrinho para continuar comprando</p>
        <Button asChild>
          <Link href="/products">Ver Produtos</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Cart Items */}
      <div className="lg:col-span-2 space-y-4">
        {items.map((item) => (
          <CartItem key={`${item.product.id}-${item.size}`} item={item} />
        ))}
      </div>

      {/* Order Summary */}
      <div className="lg:col-span-1">
        <Card className="sticky top-20">
          <CardHeader>
            <CardTitle>Resumo do Pedido</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-medium">R$ {total.toFixed(2).replace(".", ",")}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Frete</span>
              <span className="font-medium">
                {shipping === 0 ? (
                  <span className="text-green-600">Grátis</span>
                ) : (
                  `R$ ${shipping.toFixed(2).replace(".", ",")}`
                )}
              </span>
            </div>
            {total < 299 && (
              <p className="text-xs text-muted-foreground">
                Falta R$ {(299 - total).toFixed(2).replace(".", ",")} para frete grátis
              </p>
            )}
            <Separator />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-primary">R$ {finalTotal.toFixed(2).replace(".", ",")}</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full" size="lg" onClick={() => router.push("/checkout")}>
              Finalizar Compra
            </Button>
            <Button variant="outline" className="w-full bg-transparent" asChild>
              <Link href="/products">Continuar Comprando</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
