import { axiosInstance } from "@/config/axiosInstance";

export const getMatchById = async (match_id) => {
  const response = await axiosInstance.get(`match/${match_id}`);
  return response.data;
};

export const getScoreByMatchId = async (match_id) => {
  const res = await axiosInstance.get(`/score/match/${match_id}`);
  return res.data;
};