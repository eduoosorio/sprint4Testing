import { Header } from "@/components/header"
import { CheckoutForm } from "@/components/checkout/checkout-form"
import { getSupabaseServerClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function CheckoutPage() {
  const supabase = await getSupabaseServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login?redirect=/checkout")
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container py-8">
          <h1 className="text-4xl font-bold mb-8">Finalizar Compra</h1>
          <CheckoutForm user={user} />
        </div>
      </div>
    </>
  )
}
