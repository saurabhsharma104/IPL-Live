"use client"
import { DataTable } from "../table/data-table";
import { columns} from "../table/stat-column";

const StatsTab=()=>{
    const data = [
        {
          id: "728ed52f",
          player: ["1","icon","Ruturaj Gaikwad","team icon","CSK"],
          match: "10",
          avg:77,
          runs:899
        },
        
    ]

    return(
        <>
            <div className="max-w-2xl mx-auto pt-10">
                Top Runner
                <DataTable columns={columns} data={data} />
            </div>
            <div className="max-w-2xl mx-auto py-6">
                Top Wicket Taker
                <DataTable columns={columns} data={data} />
            </div>
        </>
    )
}

export default StatsTab