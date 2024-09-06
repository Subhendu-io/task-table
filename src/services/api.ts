import axios from "axios";

import { BASE_URL } from "../constants/API";

export const _get = async (api: string) => {
  const { data } = await axios.get(BASE_URL + api);
  return data;
};
