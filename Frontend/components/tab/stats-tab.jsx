import { API_ENDPOINT, BASE_URL } from "@/lib/API_config";
import { DataTable } from "../table/data-table";
import { columns} from "../table/stat-column";
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,} from "@/components/ui/select"
import { StatsData } from "@/lib/utils";


const StatsTab=({activeTab})=>{

    const [statsTableData,setStatsTableData] = useState([])
    const selectedStats = "mostRuns";


    const callStatsTableApi=async()=>{
      let res = await fetch(`${BASE_URL}${API_ENDPOINT.stats}`,)
        .then((res)=>{
          if(!res.ok){
            throw new Error("Not able to find match list")
          }
          return res.json()
        })
        .then((res)=>{
          console.log(res);
        }).catch((error)=>{
          console.log("Fetching",error)
        })
    }
  
    useEffect(()=>{
      if(activeTab === "Stats"){
        callStatsTableApi()
      }
    },[activeTab])

    const handleYearChange=(e)=>{
      // setSelectedYear(e)
      // TeamDataYearWise(e)
  }

    

    return(
        <>
            <div className="max-w-2xl mx-auto mt-20">
                  <Select value={selectedStats} onValueChange={handleYearChange}>
                    <SelectTrigger className="w-[180px] mb-3 mt-2 mr-2">
                        <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                        {StatsData.map((stats)=>{
                            return(
                                <SelectItem key={stats.value} value={stats.value}>{stats.name}</SelectItem>
                            )
                        })}
                    </SelectContent>
                  </Select>
                {/* <span className="text-lg text-white">Top Runner</span>
                <DataTable columns={columns} data={data} /> */}
                <div className="text-xl bg-white h-36 flex justify-center items-center">
                    We are working on It
                </div>
            </div>
            {/* <div className="max-w-2xl mx-auto py-6">
                <span className="text-lg text-white">Top Wicket Taker</span>
                <DataTable columns={columns} data={data} />
            </div> */}
        </>
    )
}

export default StatsTab