let myFavorites = [];
const postFav = (req, res) => {
  const character = req.body;
  if (myFavorites.length > 0) {
    if (myFavorites.find((fav) => fav.id === character.id) === undefined) {
      myFavorites.push(character);
      return res.status(200).json(myFavorites);
    }
  }
  myFavorites.push(character);
  return res.status(200).json(myFavorites);
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((fav) => fav.id !== Number(id));
  res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav };
