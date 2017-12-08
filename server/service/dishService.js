import Dish from '../models/Dish';

const DISHES_SAVED = 'Dishes Saved Sucessfully';

//Get Voters
export function getDishes(req, res) {
  Dish.find()
    .sort('number')
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
}

export function saveDishes(req, res) {
  if (!req.body) return res.sendStatus(400);

  const dishes = req.body;

  Dish.remove().then(err => {
    dishes.forEach(d => {
      let dish = new Dish({ ...d });

      dish.save((err, data) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
      });
    });
  });

  res.status(200).send({ message: DISHES_SAVED });
}
