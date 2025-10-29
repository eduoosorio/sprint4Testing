import { getSupabaseServerClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { OrdersList } from "@/components/orders/orders-list"
import { redirect } from "next/navigation"

export default async function OrdersPage() {
  const supabase = await getSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  const { data: orders } = await supabase
    .from("orders")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container py-8">
          <h1 className="text-4xl font-bold mb-8">Meus Pedidos</h1>
          <OrdersList orders={orders || []} />
        </div>
      </div>
    </>
  )
}
