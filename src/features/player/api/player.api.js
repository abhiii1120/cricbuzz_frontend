import { axiosInstance } from "@/config/axiosInstance";

export const getPlayer = () => {
    axiosInstance.get('/player');
}

export const getPlayerByTeamId = (team_id) => {
    axiosInstance.get(`/player/${team_id}`);
}