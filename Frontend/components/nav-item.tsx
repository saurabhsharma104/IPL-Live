"use client"
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

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
        <div 
        onClick={onClick} 
        role="button"
        className={cn("text-white p-3 mb-1 justify-center group main-h-[57px] text-lg w-full hover:bg-primary/5 flex items-center font-medium",active && "bg-secondary/2 text-primary")} 
        >
        <Icon 
        className={"text-white shrink-0 h-[18px] w-[18px] mr-2"}/>
        <span className="truncate">
            {label}
        </span>
        </div>
     );
}
