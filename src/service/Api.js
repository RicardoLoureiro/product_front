import Axios from "axios";

export const baseURL = {
  productApi: "http://localhost:8000/api",
};

export const getAxios = ({ token }, urlApi) => {
  let options = {};
  if (token) {
    options.Authorization = `Bearer ${token}`;
  }

  return Axios.create({ baseURL: urlApi, headers: options });
};
