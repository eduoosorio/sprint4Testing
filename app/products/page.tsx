import { getSupabaseServerClient } from "@/lib/supabase/server"
import { ProductGrid } from "@/components/products/product-grid"
import { ProductFilters } from "@/components/products/product-filters"
import { Header } from "@/components/header"

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>
}) {
  const params = await searchParams
  const supabase = await getSupabaseServerClient()

  let query = supabase.from("products").select("*").order("created_at", { ascending: false })

  if (params.category) {
    query = query.eq("category", params.category)
  }

  if (params.search) {
    query = query.ilike("name", `%${params.search}%`)
  }

  const { data: products } = await query

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Nossos Produtos</h1>
            <p className="text-muted-foreground">Explore nossa coleção completa de sneakers</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-64 flex-shrink-0">
              <ProductFilters />
            </aside>

            <main className="flex-1">
              <ProductGrid products={products || []} />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}
