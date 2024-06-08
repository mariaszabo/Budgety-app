import axios from "axios";

export type LoginRequest = {
  username: string;
  password: string;
};

type LoginResponse = {
  token: string;
};

export const login = async (data: LoginRequest) => {
  const response = await axios.post<LoginResponse>("/auth/login", data);
  return response.data;
};

export type RegisterRequest = {
  fullName: string;
  username: string;
  password: string;
  terms: boolean;
};

type RegisterResponse = {
  token: string;
};

export const register = async (data: RegisterRequest) => {
  const response = await axios.post<RegisterResponse>("/auth/register", data);
  return response.data;
};
