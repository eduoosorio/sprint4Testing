import { createServerClient } from "@/lib/supabase/server"

export async function isAdmin() {
  const supabase = await createServerClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return false

  const { data: profile } = await supabase.from("user_profiles").select("role").eq("id", user.id).single()

  return profile?.role === "admin"
}

export async function requireAdmin() {
  const admin = await isAdmin()

  if (!admin) {
    throw new Error("Unauthorized: Admin access required")
  }

  return true
}
