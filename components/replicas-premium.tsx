export default function ReplicasPremium() {
  const replicas = [
    {
      name: "Jordan 1 Replica",
      similarity: "99%",
      price: "R$ 299",
      image: "/jordan-1-replica-premium.jpg",
      description: "Qualidade indistinguível do original",
    },
    {
      name: "Nike Dunk Replica",
      similarity: "98%",
      price: "R$ 249",
      image: "/nike-dunk-replica-premium.jpg",
      description: "Materiais premium, acabamento perfeito",
    },
    {
      name: "Yeezy 350 Replica",
      similarity: "99%",
      price: "R$ 349",
      image: "/yeezy-350-replica-premium.jpg",
      description: "Detalhes impecáveis",
    },
    {
      name: "Travis Scott AJ1 Replica",
      similarity: "98%",
      price: "R$ 329",
      image: "/travis-scott-jordan-1-replica.jpg",
      description: "Acabamento de luxo",
    },
  ]

  return (
    <div className="w-full px-6 md:px-12 py-12 md:py-20 bg-neutral-900">
      <div className="space-y-12">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-gold mb-2">Réplicas Premium</h2>
          <p className="text-neutral-400 text-lg">Qualidade de luxo com preço acessível</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {replicas.map((item, index) => (
            <div
              key={index}
              className="group bg-black/50 rounded-lg overflow-hidden hover:bg-black/70 transition-colors duration-300 border border-gold/20 hover:border-gold/50"
            >
              <div className="relative overflow-hidden h-64 md:h-72">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full font-bold text-sm">
                  {item.similarity}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-neutral-400 text-sm mb-4">{item.description}</p>
                <p className="text-gold font-bold text-2xl">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
