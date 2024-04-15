
"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Button } from "components/ui/button"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type TbGrade = {
  id: number
  atribuicao: string
  status: "andamento" | "finalizado" | "null" | null
  validacao: string
  status_val: "andamento" | "finalizado" | "null" | null
  area_km2: number
}

export const columns: ColumnDef<TbGrade>[] = [
  {
    accessorKey: "atribuicao",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "validacao",
    header: "Validação",
  },
    {
        accessorKey: "status_val",
        header: "Status Val",
    },
    {
        accessorKey: "area_km2",
        header: "Área (km²)",
    },
]
