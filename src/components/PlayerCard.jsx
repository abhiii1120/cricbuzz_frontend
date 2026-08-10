const PlayerCard = ({ player }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="h-56 bg-gray-100">
        <img
          src={player.image}
          alt={player.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = `https://placehold.co/400x400?text=${player.name}`;
          }}
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900">
          {player.name}
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          {player.country}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              player.role === "BATSMAN"
                ? "bg-blue-100 text-blue-700"
                : player.role === "BOWLER"
                ? "bg-red-100 text-red-700"
                : player.role === "ALL_ROUNDER"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {player.role.replace("_", " ")}
          </span>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">
              Batting
            </span>
            <span className="font-medium">
              {player.battingStyle}
            </span>
          </div>

          {player.bowlingStyle && (
            <div className="flex justify-between">
              <span className="text-gray-500">
                Bowling
              </span>
              <span className="font-medium">
                {player.bowlingStyle}
              </span>
            </div>
          )}
        </div>

        <button className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;