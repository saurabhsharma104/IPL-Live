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
  const [loading,setLoading] = useState(false)
  const [matchDetails, setMatchDetails] = useState({});

  const fetchMatchDetails = useCallback(async () => {
    setLoading(true)
    try {
      const response = await fetch(`${BASE_URL}${API_ENDPOINT.matchDetails}/${id}`, { cache: "no-cache" });
      if (!response.ok) {
        throw new Error("Not able to find match list");
      }
      const data = await response.json();
      setLoading(false)
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
    {loading ? null :<>
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
    </>}
    </>
  );
}
