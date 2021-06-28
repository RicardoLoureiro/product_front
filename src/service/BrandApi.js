import { getAxios, baseURL } from "./Api";

export async function getBrands() {
  const api = getAxios({}, baseURL["productApi"]);

  let url = `/brands/`;

  url = `${url}`;

  return api.get(url);
}
