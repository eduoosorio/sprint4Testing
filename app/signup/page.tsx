import { SignupForm } from "@/components/auth/signup-form"
import Image from "next/image"
import Link from "next/link"

export default function SignupPage() {
  return (
    <div className="min-h-screen flex">
      {/* Left side - Signup Form */}
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
            <h1 className="text-3xl font-bold text-foreground">Criar conta</h1>
            <p className="text-muted-foreground mt-2">Junte-se à comunidade Sky Sneakers</p>
          </div>

          <SignupForm />

          <p className="text-center text-sm text-muted-foreground">
            Já tem uma conta?{" "}
            <Link href="/login" className="text-primary hover:underline font-medium">
              Fazer login
            </Link>
          </p>
        </div>
      </div>

      {/* Right side - Hero Image */}
      <div className="hidden lg:flex flex-1 bg-accent/20 items-center justify-center p-12">
        <div className="max-w-lg text-center space-y-6">
          <h2 className="text-4xl font-bold text-foreground">
            Comece sua jornada
            <br />
            <span className="text-primary">no mundo dos sneakers</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Crie sua conta e tenha acesso a ofertas exclusivas, lançamentos antecipados e muito mais.
          </p>
        </div>
      </div>
    </div>
  )
}
