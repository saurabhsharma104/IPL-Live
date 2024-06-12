"use client"
import { API_ENDPOINT, BASE_URL } from "@/lib/API_config";
import { DataTable } from "../table/data-table";
import { CircleCheck, CircleMinus, CircleX } from "lucide-react"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TableTab() {
  const [pointTableData,setPointTableData] = useState([])

  const callPointTableApi=async()=>{
    await fetch(`${BASE_URL}${API_ENDPOINT.pointTable}`,{cache:"force-cache"})
     .then((res)=>{
       if(!res.ok){
         throw new Error("Not able to find match list")
       }
       return res.json()
     })
     .then((res)=>{
        setPointTableData(res.pointsTable[0]?.pointsTableInfo)
     }).catch((error)=>{
        setPointTableData([])
        console.log("Fetching",error)
     })
   }

  useEffect(()=>{
      callPointTableApi()
  },[])


  const columns= [
    {
      accessorKey: "team",
      header: "Team",
      cell: ({ row }) => {
        const data=row.original
    
        return <div className="font-medium">{data?.teamFullName}</div>
      },
    },

    {
      accessorKey: "matchesPlayed",
      header: "M",
      cell: ({ row }) => {
        const data=row.original
    
        return <div className="font-medium">{data?.matchesPlayed}</div>
      },
    },

    {
      accessorKey: "matchesWon",
      header: "W",
      cell: ({ row }) => {
        const data=row.original
    
        return <div className="font-medium">{data?.matchesWon}</div>
      },
    },

    {
      accessorKey: "matchesLost",
      header: "L",
      cell: ({ row }) => {
        const data=row.original
    
        return <div className="font-medium">{data?.matchesLost}</div>
      },
    },

    {
      accessorKey: "nrr",
      header: "NRR",
      cell: ({ row }) => {
        const data=row.original
    
        return <div className="font-medium">{data?.nrr}</div>
      },
    },

    {
      accessorKey: "points",
      header: "Pts",
      cell: ({ row }) => {
        const data=row.original
    
        return <div className="font-medium">{data?.points}</div>
      },
    },
    
    {
      accessorKey: "lastFive",
      header: "Last 5",
      cell: ({ row }) => {
          const data=row.original?.form
          return(
                <div className="flex gap-2">{data.map((val,inx)=>{
                    return(
                        <div key={inx} className="text-right font-medium">
                            {val=="L"? <CircleX className="w-4 h-4 text-destructive" />:val=="W" ? <CircleCheck  className="w-4 h-4 text-green-500"/>:<CircleMinus  className="w-4 h-4 text-gray-500"/>}
                        </div> 
                    )
                })
              }</div>
          )
        },
    },
  ]

  return(
      <>
        <div className="p-3 mx-auto mt-10">
          <DataTable columns={columns} data={pointTableData} />
        </div>
      </>
  )
}