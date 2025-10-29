"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { Loader2, Save } from "lucide-react"
import type { UserProfile } from "@/types/database"

interface ProfileFormProps {
  userId: string
  initialProfile: UserProfile | null
}

export function ProfileForm({ userId, initialProfile }: ProfileFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [loadingCep, setLoadingCep] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const [fullName, setFullName] = useState(initialProfile?.full_name || "")
  const [phone, setPhone] = useState(initialProfile?.phone || "")
  const [zipCode, setZipCode] = useState(initialProfile?.zip_code || "")
  const [address, setAddress] = useState(initialProfile?.address || "")
  const [city, setCity] = useState(initialProfile?.city || "")
  const [state, setState] = useState(initialProfile?.state || "")

  const fetchAddressByCep = async (cep: string) => {
    const cleanCep = cep.replace(/\D/g, "")

    if (cleanCep.length !== 8) {
      return
    }

    setLoadingCep(true)
    setError(null)

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
      const data = await response.json()

      if (data.erro) {
        setError("CEP não encontrado")
        setLoadingCep(false)
        return
      }

      setAddress(data.logradouro || "")
      setCity(data.localidade || "")
      setState(data.uf || "")
    } catch (err) {
      console.error("[v0] Error fetching CEP:", err)
      setError("Erro ao buscar CEP. Tente novamente.")
    } finally {
      setLoadingCep(false)
    }
  }

  useEffect(() => {
    const cleanCep = zipCode.replace(/\D/g, "")
    if (cleanCep.length === 8) {
      fetchAddressByCep(cleanCep)
    }
  }, [zipCode])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setSuccess(null)

    const supabase = getSupabaseBrowserClient()

    try {
      const { error: updateError } = await supabase.from("user_profiles").upsert({
        id: userId,
        full_name: fullName,
        phone: phone || null,
        zip_code: zipCode || null,
        address: address || null,
        city: city || null,
        state: state || null,
        updated_at: new Date().toISOString(),
      })

      if (updateError) {
        console.error("[v0] Error updating profile:", updateError)
        setError("Erro ao atualizar perfil. Verifique se as políticas do banco estão corretas.")
        setLoading(false)
        return
      }

      setSuccess("Perfil atualizado com sucesso!")
      setLoading(false)

      // Refresh para atualizar os dados no header
      router.refresh()
    } catch (err) {
      console.error("[v0] Failed to update profile:", err)
      setError("Erro ao atualizar perfil. Tente novamente mais tarde.")
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {success && (
        <div className="bg-primary/10 text-primary text-sm p-3 rounded-lg border border-primary/20">{success}</div>
      )}

      {error && (
        <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-lg border border-destructive/20">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="fullName">Nome completo *</Label>
        <Input
          id="fullName"
          type="text"
          placeholder="Seu nome completo"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          disabled={loading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="(00) 00000-0000"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="zipCode">CEP</Label>
        <div className="relative">
          <Input
            id="zipCode"
            type="text"
            placeholder="00000-000"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            disabled={loading || loadingCep}
            maxLength={9}
          />
          {loadingCep && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
          )}
        </div>
        <p className="text-xs text-muted-foreground">Digite o CEP para preencher automaticamente o endereço</p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Endereço</Label>
        <Input
          id="address"
          type="text"
          placeholder="Rua, número, complemento"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          disabled={loading}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="city">Cidade</Label>
          <Input
            id="city"
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="state">Estado</Label>
          <Input
            id="state"
            type="text"
            placeholder="UF"
            value={state}
            onChange={(e) => setState(e.target.value)}
            disabled={loading}
            maxLength={2}
          />
        </div>
      </div>

      <Button type="submit" className="w-full" disabled={loading || loadingCep}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Salvando...
          </>
        ) : (
          <>
            <Save className="mr-2 h-4 w-4" />
            Salvar alterações
          </>
        )}
      </Button>
    </form>
  )
}
