import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function ConfirmEmailPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <CardTitle>Confirme seu email</CardTitle>
          <CardDescription>
            Enviamos um email de confirmação para você. Clique no link do email para ativar sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-lg text-sm text-muted-foreground">
            <p className="font-medium text-foreground mb-2">Não recebeu o email?</p>
            <ul className="space-y-1 list-disc list-inside">
              <li>Verifique sua caixa de spam</li>
              <li>Aguarde alguns minutos</li>
              <li>Certifique-se de que digitou o email correto</li>
            </ul>
          </div>
          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link href="/login">Voltar para o login</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
