"use client"

import type { CartItem as CartItemType } from "@/hooks/use-cart"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

type CartItemProps = {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()
  const { product, quantity, size } = item

  const handleIncrease = () => {
    if (quantity < product.stock) {
      updateQuantity(product.id, size, quantity + 1)
    }
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      updateQuantity(product.id, size, quantity - 1)
    }
  }

  const handleRemove = () => {
    removeItem(product.id, size)
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="relative h-24 w-24 flex-shrink-0 rounded-md overflow-hidden bg-accent/20">
            <Image src={product.image_url || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1 min-w-0 pr-4">
                <h3 className="font-semibold text-lg truncate">{product.name}</h3>
                {product.brand && <p className="text-sm text-muted-foreground">{product.brand}</p>}
                <p className="text-sm text-muted-foreground">Tamanho: {size}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleRemove}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center justify-between">
              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-transparent"
                  onClick={handleDecrease}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 bg-transparent"
                  onClick={handleIncrease}
                  disabled={quantity >= product.stock}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="text-lg font-bold text-primary">
                  R$ {(product.price * quantity).toFixed(2).replace(".", ",")}
                </p>
                {quantity > 1 && (
                  <p className="text-xs text-muted-foreground">R$ {product.price.toFixed(2).replace(".", ",")} cada</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
