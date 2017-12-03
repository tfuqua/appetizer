import Dish from '../models/Dish';

//Get Voters
export function getDishes(req, res) {
  Dish.find()
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
}

export function saveDishes(req, res) {}
