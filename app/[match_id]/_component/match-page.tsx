"use client"
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { MoveLeft } from "lucide-react"
import { useRouter } from "next/navigation";

interface MatchProps{
    id: string;
}
export default function MatchPage({id}:MatchProps) {
    const router=useRouter()
    return(
        <>
        <div className={cn("z-50 bg-gray-200 fixed top-0 flex justify-start text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700  w-full")}>
            <MoveLeft className="w-10 h-7 text-start" onClick={()=>router.back()}/>
        </div>
        <div className="container p-1 max-w-2xl mt-1">
        <Card className="mt-2">
            <div className="flex justify-between p-5">
            <div>IPL</div>
            <div>
                <div>Live</div>
                <div className="item">
                <i className="loader --1"></i>
                </div>
            </div>
            </div>
            <div className="p-5">
            <div className="grid grid-cols-2 gap-3 place-items-center">
                <div className="flex gap-10">
                <div>
                    <p>icon</p>
                    <p>MI</p>
                </div>
                <div>
                    <p>144/7</p>
                    <p>(20)</p>
                </div>
                </div>
                <div className="flex gap-10">
                <div>
                    <p>icon</p>
                    <p>MI</p>
                </div>
                <div>
                    <p>144/7</p>
                    <p>(20)</p>
                </div>
                </div>
            </div>
            <p className="text-center text-xs mt-5">
                LSG need 134 runs in 17 ovres to win. CRR: 3.77 RRR:7.83
            </p>
            <p className="text-center text-xs">T20 48 of 72</p>
            </div>
            <Separator/>
            <div className="p-5 text-xs flex justify-between">
                <div>
                    <p className="font-bold">MI bowling</p>
                    <p className="flex items-center gap-1"><p className="h-1 w-1 rounded-full bg-blue-500"/>J.Bumrah: 0/16(2.6)</p>
                    <p>G. Coetzee: 0/24(2.0)</p>
                </div>
                <div>
                    <p className="font-bold">LSG batting</p>
                    <p className="flex items-center gap-1">M. Stoinis: 50*(39)<p className="h-1 w-1 rounded-full bg-black"/></p>
                    <p>N.Pooran:2*(2)</p>
                </div>
            </div>
        </Card>
        </div>
        </>
    )
}