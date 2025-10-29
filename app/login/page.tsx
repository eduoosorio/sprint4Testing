import { LoginForm } from "@/components/auth/login-form"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new_sky-removebg-preview-5jGB5nxyphyMrCPw72L70fQunvx6wT.png"
                alt="Sky Sneakers"
                width={120}
                height={80}
                className="mx-auto mb-6"
              />
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Bem-vindo de volta</h1>
            <p className="text-muted-foreground mt-2">Entre na sua conta para continuar</p>
          </div>

          <Suspense fallback={<div className="text-center">Carregando...</div>}>
            <LoginForm />
          </Suspense>

          <p className="text-center text-sm text-muted-foreground">
            Não tem uma conta?{" "}
            <Link href="/signup" className="text-primary hover:underline font-medium">
              Criar conta
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Hero Image */}
      <div className="hidden lg:flex flex-1 bg-accent/20 items-center justify-center p-12">
        <div className="max-w-lg text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">
            Os melhores tênis
            <br />
            <span className="text-primary">do mercado</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Acesse sua conta e explore nossa coleção exclusiva de sneakers autênticos e réplicas premium.
          </p>
        </div>
      </div>
    </div>
  )
}
