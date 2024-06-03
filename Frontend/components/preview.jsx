"use client"
import Link from "next/link"
import { Card } from "./ui/card"
import { useEffect, useState } from "react"

const PreviewMatch=({data})=>{
    const [isClient,setIsClient] = useState(false)
    useEffect(()=>{
        setIsClient(true)
    },[])


    console.log("data[0]?.match[0]?.matchScore?.team1Score.inngs1.runs")
    return(isClient &&
        <>
        <Link href={`/${data[0]?.match[0]?.matchInfo?.matchId}`}>
          <Card>
            {/* <div className="h-[200px]">sadasd</div> */}
            <div className="flex justify-between p-5">
              <div className="text-sm">IPL({data[0]?.match[0]?.matchInfo?.matchDesc})</div>
              <div>
                {data[0]?.match[0].matchInfo.state =="In Progress" ? <><div className="text-xs">Live</div>
                <div className="item">
                  <i className="loader --1"></i>
                </div></> : <>
                <div className="text-xs">Preview</div>
                <div className="item">
                  <i className="loader --1"></i>
                </div></>}
                
              </div>
            </div>
            

            {data[0]?.match[0].matchInfo.state =="In Progress" ? 
            <div className="p-5">
              <div className="grid grid-cols-2 gap-3 place-items-center">
                <div className="flex gap-10">
                  <div>
                    <p>{data[0]?.match[0].matchInfo.team1.teamSName}</p>
                    <p className="text-center">{data[0]?.match[0]?.matchScore?.team1Score.inngs1.runs}/{data[0]?.match[0]?.matchScore?.team1Score.inngs1.wickets}</p>
                    <p className="text-center">({data[0]?.match[0]?.matchScore?.team1Score.inngs1.overs})</p>

                  </div>
                </div>
                <div className="flex gap-10">
                  <div>
                    <p>{data[0]?.match[0].matchInfo.team2.teamSName}</p>
                    <p className="text-center">{data[0]?.match[0]?.matchScore?.team2Score.inngs1.runs}/{data[0]?.match[0]?.matchScore?.team2Score.inngs1.wickets}</p>
                    <p className="text-center">({data[0]?.match[0]?.matchScore?.team2Score.inngs1.overs})</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-xs mt-5">{data[0]?.match[0]?.matchInfo?.status}</p>
              <p className="text-center text-xs">{data[0]?.match[0]?.matchInfo?.matchDesc}</p>
              <p className="text-center text-xs">{`${data[0]?.match[0]?.matchInfo?.venueInfo.ground} (${data[0]?.match[0]?.matchInfo?.venueInfo.city})`}</p>
            </div>
            
            
            :




            <div className="p-5">
            <div className="grid grid-cols-2 gap-3 place-items-center">
              <div className="flex gap-10">
                <div>
                  <p>{data[0]?.match[0]?.matchInfo?.team1.teamSName}</p>
                </div>
              </div>
              <div className="flex gap-10">
                <div>
                <p>{data[0]?.match[0]?.matchInfo?.team2.teamSName}</p>
                </div>
              </div>
            </div>
            <p className="text-center text-xs mt-5">{data[0]?.match[0]?.matchInfo?.status}</p>
            <p className="text-center text-xs">{data[0]?.match[0]?.matchInfo?.matchDesc}</p>
            <p className="text-center text-xs">{`${data[0]?.match[0]?.matchInfo?.venueInfo.ground} (${data[0]?.match[0]?.matchInfo?.venueInfo.city})`}</p>
          </div>}


          </Card>
        </Link>
        </>
    )
}

export default PreviewMatch