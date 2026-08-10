import { useState } from "react";
import Card from "./Card" 

function MatchCenter({
  match,
  score: initialScore,
  commentary: initialCommentary,
}) {
  const [score] = useState(initialScore);
  const [commentary] = useState(
    initialCommentary || { items: [] }
  );

  const currentScore = Array.isArray(score)
    ? score[score.length - 1]
    : score;

  const battingTeam =
    currentScore?.battingTeam === match.team1?._id
      ? match.team1
      : match.team2;

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* HEADER */}

      <Card className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={match.seriesId?.logo}
            alt={match.seriesId?.name}
            className="w-12 h-12 rounded object-cover"
          />

          <div>
            <h1 className="text-2xl font-bold">
              {match.seriesId?.name}
            </h1>

            <p className="text-gray-500">
              {match.matchNumber}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 items-center text-center">
          <div>
            <img
              src={match.team1?.logo}
              alt={match.team1?.name}
              className="w-20 h-20 mx-auto mb-2 object-contain"
            />

            <h2 className="font-bold">
              {match.team1?.shortName}
            </h2>

            <p className="text-sm text-gray-500">
              {match.team1?.name}
            </p>
          </div>

          <div>
            <div className="font-bold text-red-600">
              {match.status}
            </div>

            {currentScore ? (
              <>
                <div className="text-4xl font-bold mt-3">
                  {currentScore.score}/
                  {currentScore.wickets}
                </div>

                <div className="text-gray-500">
                  Overs: {currentScore.overs}
                </div>

                <div className="text-gray-500">
                  RR: {currentScore.runRate}
                </div>

                {currentScore.target && (
                  <div className="text-gray-500">
                    Target: {currentScore.target}
                  </div>
                )}

                <div className="mt-2 font-medium">
                  Batting:{" "}
                  {battingTeam?.shortName}
                </div>

                <div className="text-xs text-gray-500 mt-1">
                  Innings {currentScore.innings}
                </div>
              </>
            ) : (
              <div className="mt-3 text-gray-500">
                Match Yet To Start
              </div>
            )}
          </div>

          <div>
            <img
              src={match.team2?.logo}
              alt={match.team2?.name}
              className="w-20 h-20 mx-auto mb-2 object-contain"
            />

            <h2 className="font-bold">
              {match.team2?.shortName}
            </h2>

            <p className="text-sm text-gray-500">
              {match.team2?.name}
            </p>
          </div>
        </div>
      </Card>

      {/* MATCH INFO */}

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">
          Match Information
        </h2>

        <div className="grid md:grid-cols-2 gap-3">
          <div>
            <strong>Venue:</strong> {match.venue}
          </div>

          <div>
            <strong>Status:</strong>{" "}
            <span className="font-bold text-red-600">
              {match.status}
            </span>
          </div>

          <div>
            <strong>Start Time:</strong>{" "}
            {new Date(
              match.startTime
            ).toLocaleString()}
          </div>

          <div>
            <strong>Toss:</strong>{" "}
            {match.tossWinner?.shortName} elected
            to {match.tossDecision}
          </div>
        </div>
      </Card>

      {/* COMMENTARY */}

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-4">
          Commentary
        </h2>

        <div className="space-y-3 max-h-150 overflow-y-auto">
          {commentary?.items?.length > 0 ? (
            commentary.items.map((item) => (
              <div
                key={item._id}
                className="border rounded p-3"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-bold">
                    {item.over}.{item.ball}
                  </span>

                  {item.type !== "NORMAL" && (
                    <span className="text-sm font-bold">
                      {item.type === "FOUR" &&
                        "🏏 FOUR"}
                      {item.type === "SIX" &&
                        "🔥 SIX"}
                      {item.type === "WICKET" &&
                        "🚨 WICKET"}
                    </span>
                  )}
                </div>

                <p>{item.text}</p>

                <div className="text-xs text-gray-500 mt-2">
                  {new Date(
                    item.createdAt
                  ).toLocaleString()}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">
              No commentary available.
            </p>
          )}
        </div>
      </Card>

      {/* PLAYING XI */}

      <Card className="p-6">
        <h2 className="text-xl font-bold mb-6">
          Playing XI
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* TEAM 1 */}

          <div>
            <h3 className="font-bold text-lg mb-4">
              {match.team1?.name}
            </h3>

            <div className="space-y-3">
              {match.playingXI?.team1?.map(
                (playerData) => (
                  <div
                    key={playerData.player._id}
                    className="border rounded-lg p-3 flex items-center gap-3"
                  >
                    <img
                      src={
                        playerData.player.image
                      }
                      alt={
                        playerData.player.name
                      }
                      className="w-12 h-12 rounded-full object-cover border"
                    />

                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-medium">
                          {
                            playerData.player
                              .name
                          }
                        </h4>

                        {playerData.isCaptain && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            C
                          </span>
                        )}

                        {playerData.isWicketKeeper && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            WK
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-gray-500">
                        {playerData.player.role.replaceAll(
                          "_",
                          " "
                        )}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* TEAM 2 */}

          <div>
            <h3 className="font-bold text-lg mb-4">
              {match.team2?.name}
            </h3>

            <div className="space-y-3">
              {match.playingXI?.team2?.map(
                (playerData) => (
                  <div
                    key={playerData.player._id}
                    className="border rounded-lg p-3 flex items-center gap-3"
                  >
                    <img
                      src={
                        playerData.player.image
                      }
                      alt={
                        playerData.player.name
                      }
                      className="w-12 h-12 rounded-full object-cover border"
                    />

                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="font-medium">
                          {
                            playerData.player
                              .name
                          }
                        </h4>

                        {playerData.isCaptain && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                            C
                          </span>
                        )}

                        {playerData.isWicketKeeper && (
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                            WK
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-gray-500">
                        {playerData.player.role.replaceAll(
                          "_",
                          " "
                        )}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default MatchCenter;