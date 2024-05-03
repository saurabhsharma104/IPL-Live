"use client"
import { DataTable } from "../table/data-table";
import { columns} from "../table/columns";


export default function TableTab() {
    const data = [
        {
          id: "728ed52f",
          team: ["1","rr icon","RR"],
          match: "10",
          win: "8",
          lose: "2",
          netRunRate:"+0.622",
          pts:16,
          lastFive:[false,true,true,true,true]
        },
        {
          id: "728ed52f",
          team: ["2","KKR icon","KKR"],
          match: "9",
          win: "6",
          lose: "3",
          netRunRate:"+1.096",
          pts:12,
          lastFive:[true,false,true,false,true]
        },
        {
          id: "728ed52f",
          team: ["3","LSG icon","LSG"],
          match: "10",
          win: "6",
          lose: "4",
          netRunRate:"+0.094",
          pts:12,
          lastFive:[true,false,true,true,false]
        },
      ]

    return(
        <>
            <div className="max-w-2xl mx-auto py-10">
                <DataTable columns={columns} data={data} />
            </div>
        </>
    )
}