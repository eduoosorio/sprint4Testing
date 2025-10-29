"use client"

import type { Product } from "@/types/database"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useCart } from "@/hooks/use-cart"
import { ShoppingCart, Package, Shield, Truck } from "lucide-react"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

type ProductDetailProps = {
  product: Product
}

const categoryLabels = {
  exclusivos: "Exclusivo",
  originais: "Original",
  replicas: "Réplica Premium",
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string>("")
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()
  const router = useRouter()
  const { toast } = useToast()

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Selecione um tamanho",
        description: "Por favor, escolha um tamanho antes de adicionar ao carrinho.",
        variant: "destructive",
      })
      return
    }

    addItem(product, selectedSize, quantity)
    toast({
      title: "Produto adicionado!",
      description: `${product.name} foi adicionado ao seu carrinho.`,
    })
  }

  const handleBuyNow = () => {
    if (!selectedSize) {
      toast({
        title: "Selecione um tamanho",
        description: "Por favor, escolha um tamanho antes de continuar.",
        variant: "destructive",
      })
      return
    }

    addItem(product, selectedSize, quantity)
    router.push("/cart")
  }

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-accent/20">
          <Image
            src={product.image_url || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.featured && (
            <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">Destaque</Badge>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge variant="secondary" className="mb-3">
              {categoryLabels[product.category]}
            </Badge>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            {product.brand && <p className="text-lg text-muted-foreground">{product.brand}</p>}
          </div>

          <div className="flex items-baseline gap-3">
            <p className="text-4xl font-bold text-primary">R$ {product.price.toFixed(2).replace(".", ",")}</p>
            <p className="text-sm text-muted-foreground">
              {product.stock > 0 ? `${product.stock} disponíveis` : "Esgotado"}
            </p>
          </div>

          {product.description && (
            <div>
              <h3 className="font-semibold mb-2">Descrição</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </div>
          )}

          {product.color && (
            <div>
              <h3 className="font-semibold mb-2">Cor</h3>
              <p className="text-muted-foreground">{product.color}</p>
            </div>
          )}

          {/* Size Selection */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Selecione o tamanho</Label>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="grid grid-cols-4 gap-2">
              {product.size_available.map((size) => (
                <div key={size}>
                  <RadioGroupItem value={size} id={size} className="peer sr-only" />
                  <Label
                    htmlFor={size}
                    className="flex items-center justify-center rounded-md border-2 border-muted bg-background px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary peer-data-[state=checked]:text-primary-foreground cursor-pointer transition-all"
                  >
                    {size}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Quantity */}
          <div>
            <Label className="text-base font-semibold mb-3 block">Quantidade</Label>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                disabled={quantity >= product.stock}
              >
                +
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleAddToCart}
              variant="outline"
              className="flex-1 bg-transparent"
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Adicionar ao Carrinho
            </Button>
            <Button onClick={handleBuyNow} className="flex-1" disabled={product.stock === 0}>
              Comprar Agora
            </Button>
          </div>

          {/* Features */}
          <Card className="p-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Frete Grátis</p>
                  <p className="text-xs text-muted-foreground">Acima de R$ 299</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Garantia</p>
                  <p className="text-xs text-muted-foreground">30 dias</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">Entrega</p>
                  <p className="text-xs text-muted-foreground">5-10 dias úteis</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
