export default function Originais() {
  const originais = [
    {
      brand: "Nike",
      model: "Air Max 90",
      price: "R$ 599",
      image: "/nike-air-max-90-authentic.jpg",
    },
    {
      brand: "Adidas",
      model: "Ultraboost 22",
      price: "R$ 649",
      image: "/adidas-ultraboost-authentic.jpg",
    },
    {
      brand: "New Balance",
      model: "990v6",
      price: "R$ 549",
      image: "/new-balance-990-authentic.jpg",
    },
    {
      brand: "Puma",
      model: "RS-X",
      price: "R$ 449",
      image: "/puma-rs-x-authentic.jpg",
    },
  ]

  return (
    <div className="w-full px-6 md:px-12 py-12 md:py-20 bg-white text-black">
      <div className="space-y-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-black mb-2">Originais</h2>
          <p className="text-neutral-600 text-lg">Tênis autênticos de marcas reconhecidas</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {originais.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-3 h-48 md:h-56 bg-neutral-100">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`${item.brand} ${item.model}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-neutral-600 font-semibold">{item.brand}</p>
              <h3 className="text-lg font-bold text-black mb-2">{item.model}</h3>
              <p className="text-gold font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
