"use client"

import { cn } from "@/lib/utils";
import { BarChart, ChevronsLeft, Grid3X3, Home, Settings } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { ElementRef, useRef } from "react";
import { Item } from "./nav-item";
import { useTheme } from "next-themes"

export const Navigation = () => {
  const pathname = usePathname();
  const router = useRouter()
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const { theme, setTheme } = useTheme()

  console.log("navigation",pathname)
  const handleSideBar=(val:string)=>{
    if(pathname!== "/match" &&pathname.includes("/match")){
      router.back()
    }
    router.replace(val)
  }

  const handleToggleTheme=()=>{
    if(theme=="light"){
      setTheme("dark")
    }else{
      setTheme("light")
    }
  }

  return (
    <>
      <aside ref={sidebarRef} className={cn("text-white h-full bg-[#acacac] overflow-y-auto relative flex w-60 flex-col z-[99999]")}>

        <div role="button" className={cn("h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 transition")}>
          <ChevronsLeft className="h-6 w-6" />
        </div>

        <div className="mt-10">
          <Item icon={Home} label="Home" onClick={()=>handleSideBar("/")} active={pathname=="/" ? true:false}/>
          <Item icon={Grid3X3} label="Matchs" onClick={()=>handleSideBar("match")} active={pathname=="/match" ? true:false}/>
          <Item icon={Grid3X3} label="Table" onClick={()=>handleSideBar("table")} active={pathname=="/table" ? true:false}/>
          <Item icon={BarChart} label="Stats" onClick={()=>handleSideBar("Stats")} active={pathname=="/Stats" ? true:false}/>
          <Item icon={Settings} label="Settings" onClick={handleToggleTheme}/>
        </div>

      </aside>
    </>
  )
}
