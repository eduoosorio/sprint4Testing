import type { Order, OrderItem } from "@/types/database"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Package, Truck, Clock } from "lucide-react"
import Image from "next/image"

type OrderDetailsProps = {
  order: Order
  items: (OrderItem & { product: any })[]
}

const statusLabels = {
  pending: { label: "Pendente", icon: Clock, color: "bg-yellow-500" },
  processing: { label: "Processando", icon: Package, color: "bg-blue-500" },
  shipped: { label: "Enviado", icon: Truck, color: "bg-purple-500" },
  delivered: { label: "Entregue", icon: CheckCircle2, color: "bg-green-500" },
  cancelled: { label: "Cancelado", icon: Clock, color: "bg-red-500" },
}

export function OrderDetails({ order, items }: OrderDetailsProps) {
  const statusInfo = statusLabels[order.status]
  const StatusIcon = statusInfo.icon

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Pedido Confirmado!</h1>
        <p className="text-muted-foreground">Obrigado pela sua compra. Seu pedido foi recebido com sucesso.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Order Items */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Itens do Pedido</CardTitle>
                <Badge className={statusInfo.color}>
                  <StatusIcon className="mr-1 h-3 w-3" />
                  {statusInfo.label}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 rounded-md overflow-hidden bg-accent/20">
                    <Image
                      src={item.product?.image_url || "/placeholder.svg"}
                      alt={item.product?.name || "Product"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.product?.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Tamanho: {item.size} | Quantidade: {item.quantity}
                    </p>
                    <p className="text-sm font-medium mt-1">
                      R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Endereço de Entrega</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{order.shipping_address}</p>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Resumo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Número do Pedido</span>
                  <span className="font-mono text-xs">{order.id.slice(0, 8)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Data</span>
                  <span>{new Date(order.created_at).toLocaleDateString("pt-BR")}</span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">R$ {order.total.toFixed(2).replace(".", ",")}</span>
              </div>

              <Separator />

              <div className="space-y-2">
                <p className="text-sm font-semibold">Próximos Passos:</p>
                <p className="text-sm text-muted-foreground">
                  Entraremos em contato via WhatsApp ou Instagram com as instruções de pagamento. Após a confirmação do
                  pagamento, seu pedido será processado e enviado.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
