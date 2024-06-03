"use client"
import { useHeader } from "@/hook/useHeader"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export default function Header(){
  const {activeTab, setActiveTab} = useHeader()

  const HandleTabChange=(val:string)=>{
    setActiveTab(val)
  }

  return(
    <div className={cn("z-50 bg-[#2c3673] fixed top-0 flex justify-center  w-full mb-5")}>
      <div className="ml-auto justify-center w-full flex items-center gap-x-2 "> 
        <div className="grid grid-cols-3 grid-rows-1 gap-0 h-[74px]">
          <div className="pt-5">
            <span className="text-md ml-10 text-black">Indian Premier League</span>
          </div>
          <div >
            <ul className="flex  -mb-px">
              <li className="pt-12" onClick={()=>HandleTabChange("Matches")}>
                <p className={cn(`hover:bg-gray-400 hover:text-white inline-block px-5 lg:px-12 cursor-pointer dark:text-white dark:border-white`,activeTab=="Matches" && "text-white border-b-2 border-blue-600 active")}>Matches</p>
              </li>
              <li className="me-2 pt-12" onClick={()=>HandleTabChange("Table")}>
                <p className={cn(`hover:bg-gray-400 hover:text-white  inline-block px-5 lg:px-16 cursor-pointer dark:text-white dark:border-blue-500`,activeTab=="Table" && "text-white border-b-2 border-blue-600  active")} aria-current="page">Table</p>
              </li>
              <li className="me-2 pt-12" onClick={()=>HandleTabChange("Stats")}>
                <p className={cn(`hover:bg-gray-400 hover:text-white  inline-block px-5 lg:px-16 cursor-pointer dark:text-white dark:border-blue-500`,activeTab=="Stats" && "text-white border-b-2 border-blue-600 active")}>Stats</p>
              </li>
            </ul>
          </div>
          <div ></div>
        </div>
      </div>
    </div>
  )
}