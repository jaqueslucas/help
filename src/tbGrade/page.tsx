import { TbGrade, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<TbGrade[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      atribuicao: "Analista 4",
      status: "andamento",
      validacao: "Analista 4",
      status_val: "andamento",
      area_km2: 0.28,
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
