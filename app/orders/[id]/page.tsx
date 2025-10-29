import { getSupabaseServerClient } from "@/lib/supabase/server"
import { Header } from "@/components/header"
import { OrderDetails } from "@/components/orders/order-details"
import { redirect } from "next/navigation"
import { notFound } from "next/navigation"

export default async function OrderPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const supabase = await getSupabaseServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login")
  }

  const { data: order } = await supabase.from("orders").select("*").eq("id", id).eq("user_id", user.id).single()

  if (!order) {
    notFound()
  }

  const { data: orderItems } = await supabase.from("order_items").select("*, product:products(*)").eq("order_id", id)

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <OrderDetails order={order} items={orderItems || []} />
      </div>
    </>
  )
}
