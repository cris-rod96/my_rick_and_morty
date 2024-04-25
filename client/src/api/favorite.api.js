import { instance } from "./base.api";
const model = "favorites";

export const favoriteEndpoints = {
  getAllFavorites: (UserId) => {
    return instance.get(`${model}/list/user/${UserId}`);
  },
  saveFavorite: (UserId, CharacterId) => {
    return instance.post(`${model}/save`, { UserId, CharacterId });
  },

  removeFavorite: (UserId, CharacterId) => {
    return instance.delete(
      `${model}/delete?UserId=${UserId}&CharacterId=${CharacterId}`
    );
  },
};
