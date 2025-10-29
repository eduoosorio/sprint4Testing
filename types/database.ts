export type Product = {
  id: string
  name: string
  description: string | null
  price: number
  category: "exclusivos" | "originais" | "replicas"
  brand: string | null
  size_available: string[]
  color: string | null
  image_url: string
  stock: number
  featured: boolean
  created_at: string
  updated_at: string
}

export type CartItem = {
  id: string
  user_id: string
  product_id: string
  quantity: number
  size: string
  created_at: string
  updated_at: string
  product?: Product
}

export type Order = {
  id: string
  user_id: string
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  shipping_address: string
  created_at: string
  updated_at: string
}

export type OrderItem = {
  id: string
  order_id: string
  product_id: string
  quantity: number
  size: string
  price: number
  created_at: string
  product?: Product
}

export type UserProfile = {
  id: string
  full_name: string | null
  phone: string | null
  address: string | null
  city: string | null
  state: string | null
  zip_code: string | null
  role: "user" | "admin"
  created_at: string
  updated_at: string
}

export type UserWithEmail = UserProfile & {
  email: string
}
