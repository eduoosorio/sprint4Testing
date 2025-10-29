import type { Product } from "@/types/database"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type ProductCardProps = {
  product: Product
}

const categoryLabels = {
  exclusivos: "Exclusivo",
  originais: "Original",
  replicas: "Réplica Premium",
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
        <div className="relative aspect-square overflow-hidden bg-accent/20">
          <Image
            src={product.image_url || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {product.featured && (
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">Destaque</Badge>
          )}
          <Badge className="absolute top-3 left-3" variant="secondary">
            {categoryLabels[product.category]}
          </Badge>
        </div>

        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          {product.brand && <p className="text-sm text-muted-foreground mb-2">{product.brand}</p>}
          <p className="text-sm text-muted-foreground line-clamp-2">{product.description}</p>
        </CardContent>

        <CardFooter className="p-4 pt-0 flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-primary">R$ {product.price.toFixed(2).replace(".", ",")}</p>
            <p className="text-xs text-muted-foreground">
              {product.stock > 0 ? `${product.stock} em estoque` : "Esgotado"}
            </p>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
