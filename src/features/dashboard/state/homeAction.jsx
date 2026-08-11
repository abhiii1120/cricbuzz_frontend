import { axiosInstance } from "@/config/axiosInstance";

export const getSeries = async () => {
  const response = await axiosInstance.get("/series");
  return response.data;
};