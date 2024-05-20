"use client"

import { ColumnDef } from "@tanstack/react-table"

export type StatsTable = {
  id: string
  player: Array<string>
  match:string
  avg: number
  runs: number
}

export const columns: ColumnDef<StatsTable>[] = [
  {
    accessorKey: "player",
    header: "Player",
  },
  {
    accessorKey: "match",
    header: "Match",
  },
  {
    accessorKey: "avg",
    header: "AVG",
  },
  {
    accessorKey: "runs",
    header: "Runs",
  },
]
