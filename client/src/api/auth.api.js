import { instance } from "./base.api";
const model = "auth";

export const authEndpoints = {
  login: (email, password) => {
    return instance.post(`${model}/login`, { email, password });
  },
};
