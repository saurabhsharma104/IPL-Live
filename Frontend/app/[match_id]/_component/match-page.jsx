"use client"
import { cn } from "@/lib/utils";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { API_ENDPOINT, BASE_URL } from '@/lib/API_config';
import { useEffect, useState, useCallback } from "react";
import IsMatchLive from "./isLive";
import IsMatchComplete from "./isComplete";
import IsInProgress from "./isInProgress";

export default function MatchPage({ id }) {
  const router = useRouter();
  const [matchDetails, setMatchDetails] = useState({});

  const fetchMatchDetails = useCallback(async () => {
    try {
      const response = await fetch(`${BASE_URL}${API_ENDPOINT.matchDetails}/${id}`, { cache: "no-cache" });
      if (!response.ok) {
        throw new Error("Not able to find match list");
      }
      const data = await response.json();
      setMatchDetails(data);
    } catch (error) {
      setMatchDetails({});
      console.log("Fetching error", error);
    }
  }, [id]);

  useEffect(() => {
    fetchMatchDetails();
  }, [fetchMatchDetails]);

  useEffect(() => {
    if (matchDetails?.matchHeader?.state === "In Progress" || matchDetails?.matchHeader?.state === "Drink") {
      const intervalId = setInterval(fetchMatchDetails, 30000);
      return () => clearInterval(intervalId);
    }
  }, [matchDetails?.matchHeader?.state, fetchMatchDetails]);

  return (
    <>
      <div className={cn("z-50 bg-[#2c3673] h-10 fixed top-0 flex items-center justify-start text-gray-500 border-gray-200 dark:text-gray-400 dark:border-gray-700 w-full")}>
        <MoveLeft className="w-10 h-7 text-start text-whiite cursor-pointer" onClick={() => router.back()} />
        <span className="text-sm text-white">Indian Premier League</span>
      </div>
      {Object.keys(matchDetails).length === 0 ? (
        <>Something Got Unexpected!</>
      ) : (
        <>
          {matchDetails?.matchHeader?.state === "In Progress" || matchDetails?.matchHeader?.state === "Drink" ? (
            <IsInProgress data={matchDetails} />
          ) : matchDetails?.matchHeader?.state === "Preview" ? (
            <IsMatchLive data={matchDetails} />
          ) : (
            <IsMatchComplete data={matchDetails} />
          )}
        </>
      )}
    </>
  );
}
