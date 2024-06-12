"use client"

import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import { API_ENDPOINT, BASE_URL } from "@/lib/API_config"
import { yearsData } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {Card,CardContent,CardHeader,CardTitle} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
ChartJS.register(ArcElement, Tooltip, Legend);




const MatchCard = ({ match }) => {
  return (
    <Card className={" rounded-md mb-4"}>
        <div className=' rounded-md'>
          <div className="flex justify-end px-5 text-xs p-2">
            <div>{match.date}</div>
          </div>
          <Separator />
          <div className="mt-2">
            <div className="px-5 mb-1 text-sm flex">
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
    </Card>
  );
};


const TeamDashBoard =()=>{
    const [selectedYear,setSelectedYear] = useState(2024)
    const [selectedTeam,setSelectedTeam] = useState("Mumbai Indians")
    const [teamList, setTeamList] = useState([])
    const [teamData,setTeamData] = useState({})

    const handleYearChange=(e)=>{
        setSelectedYear(e)
        TeamDataYearWise(selectedTeam,e)
    }

    const handleTeamChange=(e)=>{
        setSelectedTeam(e) 
        TeamDataYearWise(e,selectedYear)
    }

    const TeamListAPI=async()=>{
        await fetch(`${BASE_URL}${API_ENDPOINT.teamData}`,{cache:"force-cache"})
          .then((res)=>{
            if(!res.ok){
              throw new Error("Not able to find match list")
            }
            return res.json()
          })
          .then((res)=>{
            setTeamList(res)
          }).catch((error)=>{
            setTeamList([])
            console.log("Fetching error",error)
          })
    }
  
    useEffect(()=>{
    TeamListAPI()
    TeamDataYearWise(selectedTeam,selectedYear)
    },[])

    const TeamDataYearWise=async(teamName,selYear)=>{
        await fetch(`${BASE_URL}${API_ENDPOINT.teamData}/${teamName}/${selYear}`, { 
        cache:"no-cache",
        method: "GET",
        }).then((res)=>{
            if(!res.ok){
              throw new Error("Not able to find match list")
            }
            return res.json()
          })
          .then((res)=>{
            setTeamData(res)
            console.log("Fetching match list",res)
          }).catch((error)=>{
            setTeamData({})
            console.log("Fetching error",error)
          }) 
    }

    let data= [
        {
          label: "Total Match",
          value: teamData?.totalMatches || 0,
          color: "rgba(255, 0, 0, 1)",
          cutout: "50%",
        },
        {
          label: "Total win",
          value:teamData?.totalWins || 0,
          color: "rgb(135,206,235)",
          cutout: "50%",
        },
      ]


      const options = {
        plugins: {
          responsive: true,
          legend: {
            display: false
          },
        },
        cutout: "90%",
      };
    
      const finalData = {
        labels: data.map((item) => item.label),
        datasets: [
          {
            data: data.map((item) => Math.round(item.value)),
            backgroundColor: data.map((item) => item.color),
            borderColor: data.map((item) => item.color),
            borderWidth: 1,
            dataVisibility: new Array(data.length).fill(true),
          },
        ],
      };

    return(
        <div className="w-fill p-3 mt-4">
            <div className="flex gap-5">
                <Select value={selectedTeam} onValueChange={handleTeamChange}>
                    <SelectTrigger className="w-[220px]">
                        <SelectValue placeholder="Select a Team" />
                    </SelectTrigger>
                    
                    <SelectContent>
                        {teamList.map((team)=>{
                            return(
                                <SelectItem key={team.id} value={team.teamName}>{team.teamName}</SelectItem>
                            )
                        })}
                    </SelectContent>
                </Select>

                <Select value={selectedYear} onValueChange={handleYearChange}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a Year" />
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

            <Card className="w-full p-4 mt-5">
              <CardHeader>
              <CardTitle>{selectedTeam} DashBoard</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex w-full justify-between">
                  <div className="flex gap-5">
                    <Card className="min-w-[140px] p-2 mt-1">
                      <CardHeader className="mt-0">
                        <CardTitle className="text-center">Total Win</CardTitle>
                        <CardTitle className="text-muted-foreground text-center">{teamData?.totalWins}</CardTitle>
                      </CardHeader>
                    </Card>

                    <Card className="min-w-[180px] p-2 mt-1">
                      <CardHeader className="mt-0">
                        <CardTitle className="text-center">Total Matches</CardTitle>
                        <CardTitle className="text-muted-foreground text-center">{teamData?.totalMatches}</CardTitle>
                      </CardHeader>
                    </Card>

                    

                    <Card className="min-w-[180px] p-2 mt-1">
                      <CardHeader className="mb-0">
                        <CardTitle className="text-center">Highest Score</CardTitle>
                        <CardTitle className="text-muted-foreground text-center">{teamData?.highestScore}</CardTitle>
                      </CardHeader>
                    </Card>

                    <Card className="min-w-[180px] p-2 mt-1">
                      <CardHeader className="mt-0">
                        <CardTitle className="text-center">Lowest Score</CardTitle>
                        <CardTitle className="text-muted-foreground text-center">{teamData?.lowestScore}</CardTitle>
                      </CardHeader>
                    </Card>

                    <Card className="min-w-[200px] p-2 mt-1">
                      <CardHeader className="mt-0">
                        <CardTitle className="text-center">Win Probability</CardTitle>
                        <CardTitle className="text-muted-foreground text-center">{teamData?.winProb}%</CardTitle>
                      </CardHeader>
                    </Card>

                  </div>
                  <div className="h-[100px] w-[100px] text-end">
                      {Object.keys(teamData).length!=0 && <Doughnut data={finalData} options={options} />}
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="mt-4 mb-4 pb-4">
              {teamData?.matches?.map((data,idx)=>{
                return(
                  <MatchCard match={data} key={idx}/>
                )
              })}
            </div>
        </div>
    )
}
export default TeamDashBoard