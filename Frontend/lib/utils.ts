import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const yearsData=[2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008]
export const StatsData = [
  {value:"mostRuns",name:"Most Runs"},
  {value:"mostWickets",name:"Most Wickets"},
  {value:"highestScore",name:"Highest Score"},
  {value:"mostSixes",name:"Most Sixes"},
  {value:"mostFours",name:"Most Fours"},
  {value:"mostHundreds",name:"Most Hundreds"},
  {value:"mostFifties",name:"Most Fifties"},
  {value:"lowestEcon",name:"Lowest Econ"},
  
]