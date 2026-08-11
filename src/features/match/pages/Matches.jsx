import React, { useEffect, useState } from 'react'
import { getMatchesBySeriesId } from '../state/matchesAction';
import { useParams } from 'react-router';
import MatchCard from '@/components/MatchCard';

const Matches = () => {

  const [match, setMatch] = useState(null);
    const { seriesId } = useParams();


   useEffect(() => {
        const fetchMatchesBySeriesId = async () => {
          const data = await getMatchesBySeriesId(seriesId);
          setMatch(data);
        };
        fetchMatchesBySeriesId();
      }, []);

      console.log(match)
  return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
     {match?.data?.data.map((match) => (
       <MatchCard
         key={match._id}
         match={match}
       />
     ))}
    </div>
  )
}

export default Matches