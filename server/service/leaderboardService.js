import Dish from '../models/Dish';

//Get Leaderboard
export function getLeaderboard(req, res) {
  Dish.find()
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
}
