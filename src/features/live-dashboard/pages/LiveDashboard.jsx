import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMatchById, getScoreByMatchId } from "../state/liveDashboardAcion";
import MatchCenter from "@/components/MatchCenter";

const LiveDashboard = () => {
    const [match, setMatch] = useState(null);
    const [scoreData, setScoreData] = useState(null);
    const {match_id} = useParams();
  
    useEffect(() => {
      const fetchMatchById = async () => {
        const data = await getMatchById(match_id);
        setMatch(data);
      };
      const fetchScoreByMatchById = async () => {
        const data = await getScoreByMatchId(match_id);
        setScoreData(data);
      };
      fetchMatchById();
      fetchScoreByMatchById();
    }, []);


  if (!match || !scoreData) return null;

  return (
    <MatchCenter
      match={match.data}
      score={scoreData.data}
      commentary={{ items: [] }}
    />
  );
};

export default LiveDashboard;
