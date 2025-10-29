"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import type { UserWithEmail } from "@/types/database"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"

interface UsersTableProps {
  users: UserWithEmail[]
}

export function UsersTable({ users }: UsersTableProps) {
  if (users.length === 0) {
    return <div className="text-center py-8 text-muted-foreground">Nenhum usuário cadastrado ainda</div>
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead>Cidade</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Data de Cadastro</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.full_name || "Não informado"}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone || "Não informado"}</TableCell>
              <TableCell>{user.city || "Não informado"}</TableCell>
              <TableCell>
                <Badge variant={user.role === "admin" ? "default" : "secondary"}>
                  {user.role === "admin" ? "Admin" : "Usuário"}
                </Badge>
              </TableCell>
              <TableCell>{format(new Date(user.created_at), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
