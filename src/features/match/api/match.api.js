import { axiosInstance } from "@/config/axiosInstance";

export const getMatchesBySeriesId = (series_id) => {
  axiosInstance.get(`/match/series/${series_id}`);
};

export const getMatches = () => {
  axiosInstance.get("/match");
};

export const getMatchById = (match_id) => {
  axiosInstance.get(`match/${match_id}`);
};

export const getScoreByMatchId = (match_id) => {
  axiosInstance.get(`/score/match/${match_id}`);
};

export const getSeries = () => {
  axiosInstance.get("/series");
};
