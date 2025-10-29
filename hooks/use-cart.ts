"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { Product } from "@/types/database"

export type CartItem = {
  product: Product
  quantity: number
  size: string
}

type CartStore = {
  items: CartItem[]
  addItem: (product: Product, size: string, quantity?: number) => void
  removeItem: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  getTotalPrice: () => number
}

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (product, size, quantity = 1) => {
        const items = get().items
        const existingItem = items.find((item) => item.product.id === product.id && item.size === size)

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.product.id === product.id && item.size === size
                ? { ...item, quantity: item.quantity + quantity }
                : item,
            ),
          })
        } else {
          set({ items: [...items, { product, size, quantity }] })
        }
      },
      removeItem: (productId, size) => {
        set({ items: get().items.filter((item) => !(item.product.id === productId && item.size === size)) })
      },
      updateQuantity: (productId, size, quantity) => {
        if (quantity <= 0) {
          get().removeItem(productId, size)
          return
        }
        set({
          items: get().items.map((item) =>
            item.product.id === productId && item.size === size ? { ...item, quantity } : item,
          ),
        })
      },
      clearCart: () => set({ items: [] }),
      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.product.price * item.quantity, 0)
      },
    }),
    {
      name: "cart-storage",
    },
  ),
)
