export default function Exclusivos() {
  const exclusivos = [
    {
      name: "Air Jordan 1 Retro",
      price: "R$ 1.299",
      image: "/premium-air-jordan-sneaker.jpg",
      description: "Edição limitada com detalhes em ouro",
    },
    {
      name: "Nike Dunk Low",
      price: "R$ 899",
      image: "/nike-dunk-low-sneaker.jpg",
      description: "Clássico reinventado para 2025",
    },
  ]

  return (
    <div className="w-full px-6 md:px-12 py-12 md:py-20">
      <div className="space-y-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-gold mb-2">Exclusivos</h2>
          <p className="text-neutral-400 text-lg">Seleção premium de tênis raros</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {exclusivos.map((item, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4 h-80 md:h-96">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">{item.name}</h3>
              <p className="text-neutral-400 mb-3">{item.description}</p>
              <p className="text-gold font-bold text-xl">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
