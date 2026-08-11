import { axiosInstance } from "@/config/axiosInstance";

export const getMatchesBySeriesId = async (series_id) => {
  const res = await axiosInstance.get(`/match/series/${series_id}`);
  return res
};