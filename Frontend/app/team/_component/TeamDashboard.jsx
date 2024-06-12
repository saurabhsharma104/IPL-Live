"use client"

import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { API_ENDPOINT, BASE_URL } from "@/lib/API_config"
import { useEffect, useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,} from "@/components/ui/select"
import { cn, yearsData } from "@/lib/utils"


const MatchCard = ({ match,winner }) => {
    return (
      <Card className={winner==match.matchWinner ? "bg-emerald-100 rounded-md":"bg-red-100 rounded-md"}>
          <div className='hover:bg-gray-200 rounded-md'>
            <div className="flex justify-end px-5 text-xs p-2">
              <div>{match.date}</div>
            </div>
            <Separator />
            <div className="mt-2">
              <div className="px-5 mb-1 text-sm flex justify-center">
                <div className="flex justify-center">
                  <div className="flex gap-2">
                    <div className="text-lg font-semibold">{match.team1}
                    <span className="ml-2 mr-2">Vs</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div className="text-lg font-semibold">{match.team2}</div>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="text-xs px-5 p-2 flex justify-between">
                <div>
                    <span className="font-semibold mr-2">Winner:</span>
                    {match.matchWinner}
                </div>
                <div>
                    <span className="font-semibold mr-2">Result:</span>
                    {match.matchWinner} Won By {match.resultMargin} {match.result}
                </div>
              </div>
            <Separator />
            <div className="text-xs px-5 p-2 flex justify-start">
                <span className="font-semibold mr-2">Toss:</span>
                {match.tossWinner} Won the Toss Decided to {match.tossDecision} first.
            </div>
            <Separator />
            
            <div className="text-xs px-5 p-2 flex justify-start">
                <span className="font-semibold mr-2">Player Of Match:</span>
                {match.playerOfMatch}
            </div>
            <Separator />
            <div className="text-xs px-5 p-2 flex justify-start">
                <span className="font-semibold mr-2">Venue:</span>
                {match.venue}
            </div>
            
            </div>
          </div>
        {/* <Link href={`/${matchInfo.matchId}`}>
        </Link> */}
      </Card>
    );
};




const TeamDash=({name})=>{
    const teamName=name.replace(/%20/g, " ");
    const [selectedYear,setSelectedYear] = useState(2023)
    const [teamData,setTeamData] = useState({})

    const [yearWiseMatch,setYearWiseMatch] = useState([])

    const TeamDetailsAPI=async()=>{
        await fetch(`${BASE_URL}${API_ENDPOINT.teamData}/${name}`,{cache:"force-cache"})
          .then((res)=>{
            if(!res.ok){
              throw new Error("Not able to find match list")
            }
            return res.json()
          })
          .then((res)=>{
            setYearWiseMatch(res.matches)
            setTeamData(res)
          }).catch((error)=>{
            setTeamData({})
            setYearWiseMatch([])
            console.log("Fetching error",error)
          })
      }
  
      useEffect(()=>{
        TeamDetailsAPI()
      },[])

    const TeamDataYearWise=async(year)=>{
        let bodyContent = new FormData();
        bodyContent.append("year", year);

        await fetch(`${BASE_URL}${API_ENDPOINT.teamMatches}/${name}/matches`, { 
        method: "POST",
        body: bodyContent,
        }).then((res)=>{
            if(!res.ok){
              throw new Error("Not able to find match list")
            }
            return res.json()
          })
          .then((res)=>{
            setYearWiseMatch(res)
          }).catch((error)=>{
            setYearWiseMatch([])
            console.log("Fetching error",error)
          })

        
    }


    const handleYearChange=(e)=>{
        setSelectedYear(e)
        TeamDataYearWise(e)
    }

    return(
        <>
        {Object.keys(teamData).length==0 ? null : 
            <div className="p-4">
                <Card className="mt-5 mb-5 rounded-md bg-blue-100">
                    <div className="flex justify-between p-5">
                        <div>Indian Premier League</div>
                    </div>
                    <div className="p-3">
                        <div className="text-center text-lg font-bold">
                            {teamData?.teamName}
                        </div>
                        <div className="grid grid-cols-3 grid-rows-1 gap-0 justify-items-center mt-5">
                            <div>
                                <p><span className="font-semibold text-sm">Total Matches : </span>{ teamData?.totalMatches}</p>
                            </div>
                            <div>
                                <p><span className="font-semibold text-sm">Total Wins : </span>{ teamData?.totalWins}</p>
                            </div>
                            <div>
                                <p><span className="font-semibold text-sm">Total Loss : </span>{ teamData?.totalMatches - teamData?.totalWins }</p>
                            </div>
                        </div>
                    </div>
                    <Separator />
                <div className="flex justify-end">
                    <Select value={selectedYear} onValueChange={handleYearChange}>
                    <SelectTrigger className="w-[180px] mb-3 mt-2 mr-2">
                        <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                        {yearsData.map((year)=>{
                            return(
                                <SelectItem key={year} value={year}>{year}</SelectItem>
                            )
                        })}
                    </SelectContent>
                    </Select>
                </div>
                </Card>


                <div className="grid grid-cols-1 grid-rows-1 gap-4">
                    {yearWiseMatch.map((match,matchInx)=>{
                    return(
                        <MatchCard key={matchInx} match={match} winner={teamName}/>
                    )
                    })}
                </div>
            </div>
        }
        </>
    )
}

export default TeamDash