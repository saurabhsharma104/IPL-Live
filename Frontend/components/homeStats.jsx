"use client"

import { TrendingUp } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const HomeStats=({data})=>{
    const router=useRouter()

    const FirtsData=data?.values[0]

    const handleGoToStats=()=>{
        router.push("/Stats")
    }

    return(
        <div className="!dark:bg-[#aaaaaa] rounded-md border">
           <img src="/virat_kohli.png"/> 
            <div className="grid grid-cols-2 grid-rows-1 gap-2 mt-4">
                <div >
                    <p className="text-lg text-center text-muted-foreground">Name</p>
                </div>
                <div >
                    <p className="text-lg text-muted-foreground font-semibold">Virat Kohli</p>
                </div>
            </div>
           
            <div className="grid grid-cols-2 grid-rows-1 gap-2 mt-2">
                <div >
                    <p className="text-lg text-muted-foreground text-center">DOB</p>
                </div>
                <div >
                    <p className="text-lg text-muted-foreground font-semibold">05 November 1988</p>
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-1 gap-2 mt-2">
                <div >
                    <p className="text-lg text-muted-foreground text-center">Role</p>
                </div>
                <div >
                    <p className="text-lg text-muted-foreground font-semibold">Middle Order Batter</p>
                </div>
            </div>

           <div className="flex justify-center gap-10 mt-5">
                <div className="text-lg text-muted-foreground">
                    <p>Matches</p>
                    <p className="text-center text-2xl font-mono text-white font-semibold">{FirtsData?.values[2]}</p>
                </div>
                <div className="text-lg text-muted-foreground">
                    <p>Runs</p>
                    <p className="text-center text-2xl font-mono text-white font-semibold">{FirtsData?.values[4]}</p>
                </div>
                <div className="text-lg text-muted-foreground">
                    <p>Avg.</p>
                    <p className="text-center text-2xl font-mono text-white font-semibold">{FirtsData?.values[5]}</p>
                </div>

                
           </div>

           <div className="grid grid-cols-2 grid-rows-1 gap-2 mt-4">
                <div >
                    <p className="text-lg text-end text-muted-foreground">Betting Style</p>
                </div>
                <div >
                    <p className="text-lg text-center text-muted-foreground font-semibold">Right-hanede</p>
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-1 gap-0 mt-1 pb-5">
                <div >
                    <p className="text-lg text-end text-muted-foreground">Bowling Style</p>
                </div>
                <div >
                    <p className="text-lg text-center text-muted-foreground font-semibold">Right-arm</p>
                </div>
            </div>

            <div className="text-center pb-4">
                <Button variant="outline" onClick={handleGoToStats} className="border-2 border-blue-500"> 
                    <TrendingUp className="h-4 w-4 mr-4"/>
                    <span>See Stats</span>
                </Button>
            </div>
        </div>
    )
}

export default HomeStats