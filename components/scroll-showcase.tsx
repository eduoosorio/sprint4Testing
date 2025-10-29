"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface Product {
  id: number
  name: string
  brand: string
  price: string
  image: string
  description: string
  category: "exclusivos" | "originais" | "replicas"
}

const products: Product[] = [
  {
    id: 1,
    name: "Air Jordan 1 Retro",
    brand: "Jordan",
    price: "R$ 1.299",
    image: "/premium-air-jordan-sneaker.jpg",
    description: "Edição limitada com detalhes em ouro",
    category: "exclusivos",
  },
  {
    id: 2,
    name: "Nike Dunk Low",
    brand: "Nike",
    price: "R$ 899",
    image: "/nike-dunk-low-sneaker.jpg",
    description: "Clássico reinventado para 2025",
    category: "exclusivos",
  },
  {
    id: 3,
    name: "Air Max 90",
    brand: "Nike",
    price: "R$ 599",
    image: "/nike-air-max-90-authentic.jpg",
    description: "Autêntico e original",
    category: "originais",
  },
  {
    id: 4,
    name: "Ultraboost 22",
    brand: "Adidas",
    price: "R$ 649",
    image: "/adidas-ultraboost-authentic.jpg",
    description: "Tecnologia de ponta",
    category: "originais",
  },
  {
    id: 5,
    name: "Premium Replica Jordan",
    brand: "Jordan",
    price: "R$ 399",
    image: "/premium-air-jordan-sneaker.jpg",
    description: "Qualidade premium",
    category: "replicas",
  },
  {
    id: 6,
    name: "Premium Replica Nike",
    brand: "Nike",
    price: "R$ 349",
    image: "/nike-dunk-low-sneaker.jpg",
    description: "Detalhes impecáveis",
    category: "replicas",
  },
]

export default function ScrollShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const productProgress = useTransform(scrollYProgress, (value) => {
    return Math.min(value * products.length, products.length - 1)
  })

  useEffect(() => {
    const unsubscribe = productProgress.onChange((value) => {
      setActiveIndex(Math.floor(value))
    })
    return () => unsubscribe()
  }, [productProgress])

  return (
    <div ref={containerRef} className="relative bg-black">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden bg-black flex items-center justify-center">
        {/* Background gradient with animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-black to-black" />

        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            delay: 1,
          }}
        />

        {/* Product Display Area */}
        <div className="relative w-full h-full flex items-center justify-center px-4 md:px-0">
          {products.map((product, index) => {
            const isActive = index === activeIndex
            const isPast = index < activeIndex
            const isFuture = index > activeIndex
            const progress = activeIndex - index

            return (
              <motion.div
                key={product.id}
                className="absolute w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.7, y: 150 }}
                animate={{
                  opacity: isActive ? 1 : isPast ? 0 : isFuture ? 0 : 0.3,
                  scale: isActive ? 1 : 0.75,
                  y: isActive ? 0 : isFuture ? 150 : -150,
                  zIndex: isActive ? 10 : isPast ? 0 : 5,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div className="w-full h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-12 gap-8 md:gap-16">
                  {/* Image Side with parallax effect */}
                  <motion.div
                    className="w-full md:w-1/2 flex items-center justify-center"
                    initial={{ opacity: 0, x: -100 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                    transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                  >
                    <motion.div
                      className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-gold/30"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                      {/* Category badge */}
                      <motion.div
                        className="absolute top-6 right-6 px-4 py-2 bg-gold/90 text-black font-bold rounded-full text-sm"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {product.category === "exclusivos"
                          ? "Exclusivo"
                          : product.category === "originais"
                            ? "Original"
                            : "Premium"}
                      </motion.div>
                    </motion.div>
                  </motion.div>

                  {/* Content Side */}
                  <motion.div
                    className="w-full md:w-1/2 space-y-6"
                    initial={{ opacity: 0, x: 100 }}
                    animate={isActive ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  >
                    <div className="space-y-3">
                      <motion.p
                        className="text-gold text-xs font-bold uppercase tracking-widest"
                        initial={{ opacity: 0 }}
                        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {product.category === "exclusivos"
                          ? "Coleção Exclusiva"
                          : product.category === "originais"
                            ? "Autênticos"
                            : "Réplicas Premium"}
                      </motion.p>

                      <motion.h2
                        className="text-5xl md:text-6xl font-black text-white leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.25 }}
                      >
                        {product.name}
                      </motion.h2>

                      <motion.p
                        className="text-2xl text-gold font-bold"
                        initial={{ opacity: 0 }}
                        animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                      >
                        {product.brand}
                      </motion.p>
                    </div>

                    <motion.p
                      className="text-lg text-neutral-300 leading-relaxed max-w-md"
                      initial={{ opacity: 0 }}
                      animate={isActive ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {product.description}
                    </motion.p>

                    <motion.div
                      className="flex items-center gap-4 pt-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                    >
                      <p className="text-4xl font-black text-gold">{product.price}</p>
                      <Button asChild size="lg" className="bg-gold text-black font-bold hover:bg-gold/90">
                        <Link href="/products">Ver Produtos</Link>
                      </Button>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {products.map((_, index) => (
            <motion.div
              key={index}
              className="h-2 rounded-full bg-gold/30"
              animate={{
                width: activeIndex === index ? 32 : 8,
                backgroundColor: activeIndex === index ? "rgb(166, 124, 82)" : "rgba(166, 124, 82, 0.3)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          ))}
        </div>
      </div>

      {/* Scroll Spacer - increased for more scroll distance */}
      <div className="h-[600vh] bg-black" />
    </div>
  )
}
