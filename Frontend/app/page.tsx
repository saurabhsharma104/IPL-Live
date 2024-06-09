"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { API_ENDPOINT, BASE_URL } from "@/lib/API_config"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"
import HomeStats from '@/components/homeStats';
import Link from "next/link"
import Image from "next/image"


export default function Home() {

  const [statsTableData,setStatsTableData] = useState({})
  const [Id, setID] = useState("")

  const callStatsTableApi=async(val:string)=>{
    let response = await fetch(`${BASE_URL}${API_ENDPOINT.stats}/${val}`, { 
      method: "GET",
    });

    let data = await response.json();
    setStatsTableData(data?.t20StatsList)
   }

   const callPreviewMatchApi=async()=>{
    let response = await fetch(`${BASE_URL}${API_ENDPOINT.previewMatch}`, { 
      method: "GET",
    });

    let data = await response.json();
    setID(data)
   }

  useEffect(()=>{
      callStatsTableApi("mostRuns")
      callPreviewMatchApi()
  },[])


  return (
    <>
    <div className="grid grid-cols-3 grid-rows-1 gap-4 p-3 mt-3">
      <div className="col-span-2">
        <Carousel  
        plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="">
          <CarouselContent>
            {Array.from({ length: 1 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="border-none">
                    <Link href={`/match/${Id}`}>
                      <img alt="final_match" src="/final_match.jpeg"  className="h-[500px] w-full rounded-md flex aspect-square items-center justify-center"/>
                    </Link>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="col-start-3">
        {Object.keys(statsTableData).length!==0 && <HomeStats data={statsTableData}/>}
      </div>
    </div> 
    </>
  );
}
