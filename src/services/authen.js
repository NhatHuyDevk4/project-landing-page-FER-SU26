import { BASE_URL } from "./apiClinet";
import { apiClient } from "./apiClinet";


export const login = async (payload) => {
  const res = await apiClient.post(`${BASE_URL}/login`, payload);
  return res.data;
};

export const register = async (payload) => {
    const res = await apiClient.post(`${BASE_URL}/register`, payload);
    return res.data;
}