import { Header } from "@/components/header"
import { CartContent } from "@/components/cart/cart-content"

export default function CartPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container py-8">
          <h1 className="text-4xl font-bold mb-8">Carrinho de Compras</h1>
          <CartContent />
        </div>
      </div>
    </>
  )
}
