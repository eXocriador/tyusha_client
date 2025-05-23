import axios from "axios";

const API_URL = "https://tyusha-server.onrender.com/api/auth"; // змінити на свій бекенд

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  return response.data;
};

export const register = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/register`, { email, password });
  return response.data;
};

export const googleLogin = async (googleToken: string) => {
  const response = await axios.post(`${API_URL}/google`, { token: googleToken });
  return response.data; // має повертати JWT токен
};

export const appleLogin = async (appleToken: string) => {
  const response = await axios.post(`${API_URL}/apple`, { token: appleToken });
  return response.data;
};
