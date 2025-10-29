import type { Order } from "@/types/database"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"

type OrdersListProps = {
  orders: Order[]
}

const statusLabels = {
  pending: { label: "Pendente", variant: "secondary" as const },
  processing: { label: "Processando", variant: "default" as const },
  shipped: { label: "Enviado", variant: "default" as const },
  delivered: { label: "Entregue", variant: "default" as const },
  cancelled: { label: "Cancelado", variant: "destructive" as const },
}

export function OrdersList({ orders }: OrdersListProps) {
  if (orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <ShoppingBag className="h-24 w-24 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-2">Nenhum pedido encontrado</h2>
        <p className="text-muted-foreground mb-6">Você ainda não fez nenhum pedido</p>
        <Button asChild>
          <Link href="/products">Ver Produtos</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => {
        const statusInfo = statusLabels[order.status]
        return (
          <Card key={order.id}>
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold">Pedido #{order.id.slice(0, 8)}</h3>
                    <Badge variant={statusInfo.variant}>{statusInfo.label}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {new Date(order.created_at).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                  <p className="text-lg font-bold text-primary">R$ {order.total.toFixed(2).replace(".", ",")}</p>
                </div>
                <Button asChild>
                  <Link href={`/orders/${order.id}`}>Ver Detalhes</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
