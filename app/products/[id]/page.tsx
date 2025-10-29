import { getSupabaseServerClient } from "@/lib/supabase/server"
import { ProductDetail } from "@/components/products/product-detail"
import { Header } from "@/components/header"
import { notFound } from "next/navigation"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await getSupabaseServerClient()

  const { data: product } = await supabase.from("products").select("*").eq("id", id).single()

  if (!product) {
    notFound()
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <ProductDetail product={product} />
      </div>
    </>
  )
}
