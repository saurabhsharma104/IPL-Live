"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CircleCheck, CircleX } from "lucide-react"

export type CriTable = {
  id: string
  team: Array<string>
  match: string
  win: string
  lose: string
  netRunRate: string
  pts:number
  lastFive:Array<Boolean>
}

export const columns: ColumnDef<CriTable>[] = [
  {
    accessorKey: "team",
    header: "Team",
  },
  {
    accessorKey: "win",
    header: "W",
  },
  {
    accessorKey: "lose",
    header: "L",
  },
  {
    accessorKey: "lose",
    header: "L",
  },
  {
    accessorKey: "netRunRate",
    header: "NRR",
  },
  {
    accessorKey: "pts",
    header: "Pts",
  },
  {
    accessorKey: "lastFive",
    header: "Last 5",
    cell: ({ row }) => {
        const data=row.original?.lastFive
        return(
              <div className="flex gap-2">{data.map((val,inx)=>{
                  return(
                      <div key={inx} className="text-right font-medium">
                          {val==false? <CircleX className="w-4 h-4 text-destructive" />:<CircleCheck  className="w-4 h-4 text-green-500"/>}
                      </div> 
                  )
              })
            }</div>
        )
      },
  },
]
