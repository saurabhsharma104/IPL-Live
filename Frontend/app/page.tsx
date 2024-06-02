"use client"

import Header from "@/components/header";
import MatchesTab from "@/components/tab/Matches";
import StatsTab from "@/components/tab/stats-tab";
import TableTab from "@/components/tab/table";
import { useHeader } from "@/hook/useHeader";

export default function Home() {
  const {activeTab} = useHeader()
  return (
    <>
      <Header/>
      {activeTab==="Matches" && <MatchesTab activeTab={activeTab}/>}
      {activeTab==="Table" && <TableTab activeTab={activeTab}/>}
      {activeTab==="Stats" && <StatsTab activeTab={activeTab}/>}
    </>
  );
}
