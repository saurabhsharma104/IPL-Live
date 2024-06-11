"use client"
import { cn } from "@/lib/utils";
import { ChevronsRight, LucideIcon } from "lucide-react";

interface ItemProps {
    active?:boolean;
    label:string;
    onClick?:() => void;
    icon:LucideIcon;
}

export const Item = ({
    label,
    onClick,
    active,
    icon:Icon,
}:ItemProps) => {

    return (
        <div className="flex items-center">
            {active && 
            <ChevronsRight className=" h-4 w-4 text-blue-600 flex items-center mt-1" />}
            <div 
            onClick={onClick} 
            role="button"
            className={cn("relative text-white p-3 mb-1 group main-h-[57px] text-lg w-full flex items-center font-medium",active && "bg-secondary/2 text-primary")} 
            >
            <Icon 
            className={cn("text-white shrink-0 h-[18px] w-[18px] mr-2",active && "bg-secondary/2 text-primary")}/>
            <span className="truncate">
                {label}
            </span>
            </div>
        </div>
     );
}
