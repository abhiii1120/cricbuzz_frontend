import { useNavigate } from "react-router";

const MatchCard = ({ match }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b">
        <div>
          <h2 className="font-bold text-lg">{match.matchNumber}</h2>
          <p className="text-sm text-gray-500">{match.venue}</p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            match.status === "LIVE"
              ? "bg-red-100 text-red-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {match.status}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-center gap-2">
            <img
              src={match.team1.logo}
              alt={match.team1.name}
              className="w-16 h-16 object-contain"
            />
            <span className="font-semibold text-lg">
              {match.team1.shortName}
            </span>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold">VS</div>
            <div className="text-xs text-gray-500 mt-1">
              {new Date(match.startTime).toLocaleDateString()}
            </div>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img
              src={match.team2.logo}
              alt={match.team2.name}
              className="w-16 h-16 object-contain"
            />
            <span className="font-semibold text-lg">
              {match.team2.shortName}
            </span>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Toss Winner</span>
            <span className="font-medium">
              {match.tossWinner.shortName}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Decision</span>
            <span className="font-medium">
              {match.tossDecision}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Playing XI</span>
            <span className="font-medium">
              {match.playingXI.team1.length} vs {match.playingXI.team2.length}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Venue</span>
            <span className="font-medium text-right max-w-55">
              {match.venue}
            </span>
          </div>
        </div>

        <button onClick={()=>{
          navigate(`/live/${match._id}`)
        }} className="w-full mt-6 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-medium transition">
          View Match Details
        </button>
      </div>
    </div>
  );
};

export default MatchCard;