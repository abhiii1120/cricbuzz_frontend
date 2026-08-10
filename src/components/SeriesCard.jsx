import { useNavigate } from "react-router";

const SeriesCard = ({ series }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-sm rounded-2xl border bg-white shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="h-40 bg-gray-100 flex items-center justify-center">
        <img
          src={series.logo}
          alt={series.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">{series.name}</h2>

          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full ${
              series.status === "LIVE"
                ? "bg-red-100 text-red-600"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {series.status}
          </span>
        </div>

        <p className="text-gray-500 mt-1">{series.shortName}</p>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">Season</span>
            <span className="font-medium">{series.season}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Series ID</span>
            <span className="font-medium truncate max-w-37.5">
              {series._id}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Created</span>
            <span className="font-medium">
              {new Date(series.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>

        <button onClick={()=>{
           navigate(`/match/${series._id}`)
        }} className="w-full mt-5 bg-blue-600 cursor-pointer text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Matches
        </button>
      </div>
    </div>
  );
};

export default SeriesCard;