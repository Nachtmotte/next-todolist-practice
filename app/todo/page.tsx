import { DataTable } from "@/components/todo/data-table"
import { columns } from "@/components/todo/columns"

import type{ Todo } from "@/types/todo"

async function getData(): Promise<Todo[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      text: "Todo test",
      status: true,
      createdAt: new Date(),
    },
    // ...
  ]
}

export default async function TodoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
