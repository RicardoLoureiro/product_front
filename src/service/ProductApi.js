import { getAxios, baseURL } from "./Api";

export async function getProducts() {
  const api = getAxios({}, baseURL["productApi"]);

  let url = `/products/`;

  url = `${url}`;

  return api.get(url);
}
