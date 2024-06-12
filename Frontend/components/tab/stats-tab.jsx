"use client"
import { API_ENDPOINT, BASE_URL } from "@/lib/API_config";
import { DataTable } from "../table/data-table";
import { useEffect, useMemo, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,} from "@/components/ui/select"
import { StatsData } from "@/lib/utils";

function addSpaceBeforeCapitals(str) {
  return str.replace(/([A-Z])/g, ' $1').trim();
}


const StatsTab=()=>{

    const [statsTableData,setStatsTableData] = useState({})
    const [selectedStats,setSelectedStats] = useState("mostRuns")

    const callStatsTableApi=async(val)=>{
      let response = await fetch(`${BASE_URL}${API_ENDPOINT.stats}/${val}`, { 
        method: "GET",
        cache:"no-cache"
      });

      let data = await response.json();
      setStatsTableData(data?.t20StatsList)
     }
  
    useEffect(()=>{
        callStatsTableApi("mostRuns")
    },[])

    const handleYearChange=(e)=>{
      callStatsTableApi(e)
      setSelectedStats(e)
  }

  const columns = useMemo(() => statsTableData?.headers?.map(header => ({
    header: header,
    accessorKey: header.toLowerCase().replace(/ /g, '_'),
    id:header
  })), [statsTableData]);

  const data = useMemo(() => statsTableData?.values?.map(item => {
    const obj= {};
    statsTableData.headers.forEach((header, index) => {
      obj[header.toLowerCase().replace(/ /g, '_')] = item.values[index+1];
    });
    return obj;
  }), [statsTableData?.values, statsTableData?.headers]);

  return(
      <>
        <div className="p-3 mx-auto mt-10">
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
          <span className="text-lg text-black dark:text-white capitalize">{addSpaceBeforeCapitals(selectedStats)}</span>
          {statsTableData!=undefined && Object?.keys(statsTableData).length!=0 &&<DataTable columns={columns} data={data} />}
        </div>
      </>
  )
}

export default StatsTab