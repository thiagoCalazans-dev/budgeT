import api from "../libs/axios";

export const GetAll = async (url: string, queryParams: string = "") => {
  const { data } = await api.get(`${url}${queryParams}`);
  return data;
};
