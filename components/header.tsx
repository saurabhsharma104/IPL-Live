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
    <div className={cn("z-50 bg-gray-200 fixed top-0 flex justify-center  w-full")}>
      <div className="ml-auto justify-center w-full flex items-center gap-x-2 ">        
        <div className="text-sm font-medium text-center text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap justify-between -mb-px">
            <li className="hover:bg-gray-400 hover:text-white pt-4" onClick={()=>HandleTabChange("Matches")}>
              <p className={cn(`inline-block px-5 lg:px-12 cursor-pointer dark:text-blue-500 dark:border-blue-500`,activeTab=="Matches" && "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active")}>Matches</p>
            </li>
            <li className="me-2 hover:bg-gray-400 hover:text-white  pt-4" onClick={()=>HandleTabChange("Table")}>
              <p className={cn(`inline-block px-5 lg:px-16 cursor-pointer dark:text-blue-500 dark:border-blue-500`,activeTab=="Table" && "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active")} aria-current="page">Table</p>
            </li>
            <li className="me-2 hover:bg-gray-400 hover:text-white   pt-4" onClick={()=>HandleTabChange("Stats")}>
              <p className={cn(`inline-block px-5 lg:px-16 cursor-pointer dark:text-blue-500 dark:border-blue-500`,activeTab=="Stats" && "text-blue-600 border-b-2 border-blue-600 rounded-t-lg active")}>Stats</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}