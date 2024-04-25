import { instance } from "./base.api";

const model = "characters";

export const characterEndpoints = {
  getByID: (id) => {
    return instance.get(`${model}/view/${id}`);
  },
};
