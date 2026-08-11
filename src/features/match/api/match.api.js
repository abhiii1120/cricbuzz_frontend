import { axiosInstance } from "@/config/axiosInstance";

export const getMatchesBySeriesId = (series_id) => {
  axiosInstance.get(`/match/series/${series_id}`);
};

export const getMatches = () => {
  axiosInstance.get("/match");
};



