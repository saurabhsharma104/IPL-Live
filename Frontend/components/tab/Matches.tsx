"use client"
import {Card} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { API_ENDPOINT, BASE_URL } from "@/lib/API_config";
import Link from "next/link";
import { useEffect, useState } from "react";
import PreviewMatch from './../preview';
import { Skeleton } from "../ui/skeleton";

const MatchCard = ({ match, length }:{match:any,length:number}) => {
  const matchInfo = match?.match[0]?.matchInfo;
  const matchScore = match?.match[0]?.matchScore;

  const getScore = (teamScore:any) => {
    const inngs1 = teamScore?.inngs1;
    return inngs1 ? `${inngs1.runs}/${inngs1.wickets} (${inngs1.overs})` : "-";
  };

  return (
    <Card className="card-container">
      <Link href={`/${matchInfo.matchId}`}>
        <div className='hover:bg-gray-200'>
          <div className="flex justify-between px-5 text-xs p-2">
            <div>{`${matchInfo?.matchDesc?.replace("Match", "")} of ${length}`}</div>
            <div>{match.key}</div>
          </div>
          <Separator />
          <div className="mt-2">
            <div className="px-5 mb-1 text-sm flex justify-between">
              <div>
                <div className="flex gap-2">
                  <div>{matchInfo?.team1?.teamSName}</div>
                </div>
                <div className="flex gap-2">
                  <div>{matchInfo?.team2?.teamSName}</div>
                </div>
              </div>
              {matchScore && (
                <div>
                  <div className="flex gap-4">
                    <div>{matchScore.team1Score && getScore(matchScore.team1Score)}</div>
                  </div>
                  <div className="flex gap-2">
                    <div>{getScore(matchScore.team2Score)}</div>
                  </div>
                </div>
              )}
            </div>
            <Separator />
            <div className="text-xs px-5 p-2 flex justify-between">
              <div>{matchInfo?.status}</div>
              <div>{matchInfo?.venueInfo?.city}</div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

const MatchesTab=({activeTab}:{activeTab:string})=>{
  const [matchList,setMatchList] = useState<any[]>([])
  const [previewList,setPreviewList] = useState<any[]>([])
  const [loader,setLoader] = useState<Boolean>(false)

  const callMatchListApi=async()=>{
   setLoader(true)
   await fetch(`${BASE_URL}${API_ENDPOINT.matchList}`,)
    .then((res)=>{
      if(!res.ok){
        throw new Error("Not able to find match list")
      }
      return res.json()
    })
    .then((res)=>{
      const result:any[]=[]
      const previewMatch:any[]=[]
      res?.matchDetails.forEach((match:any)=>{
        if(match.hasOwnProperty("matchDetailsMap")){
          const key=match.matchDetailsMap.key
          match.matchDetailsMap.match.forEach((mt:any)=>{
            if(mt?.matchInfo.state=="Preview" || mt?.matchInfo.state=="In Progress"){
              previewMatch.push({
                key:key.toString(),
                match:[mt]
              })
            }else{
              result.push({
                key: key.toString(),
                match: [mt]
              })
            }
          })
        }
      })
      setMatchList(result)
      setPreviewList(previewMatch)

    }).catch((error)=>{
      setMatchList([])
      console.log("Fetching",error)
    })
    setLoader(false)
  }

  useEffect(()=>{
    if(activeTab=="Matches"){
      callMatchListApi()
    }
  },[activeTab])

  // console.log("Fetching",previewList)


  return(
    <div className="container p-1 max-w-2xl mt-16">
      <div className="mb-4">
        {previewList.length!==0 && 
          <PreviewMatch data={previewList}/>
        }
      </div>
      <div className="grid grid-cols-2 grid-rows-1 gap-4">
        {loader ? [1,2,3,4,5,6,7,8,9,10,11,12].map((i)=>{
          return(
            <Skeleton key={i} className="w-full h-[100px] rounded-sm" />
          )
        }):
        <>
          {matchList.reverse().map((match,matchInx)=>{
            return(
              <MatchCard key={matchInx} match={match} length={matchList.length}/>
            )
          })}
        </>
      }
      </div>
    </div>
  )
}

export default MatchesTab