//@flow
import Dish from '../models/Dish';
import Voter from '../models/Voter';

export default function() {
  createVoterData();
  createDishData();
}

function createVoterData() {
  Voter.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    for (let i = 0; i < 8; i++) {
      const voter = new Voter({
        name: `Voter #${i}`,
        voted: false
      });

      Voter.create(voter, error => {
        if (error) {
          console.log(error);
        }
      });
    }
  });
}

function createDishData() {
  Dish.count().exec((err, count) => {
    if (count > 0) {
      return;
    }

    for (let i = 0; i < 21; i++) {
      const dish = new Dish({
        title: `Dish #${i}`,
        description: `Description for dish ${i}`
      });

      Dish.create(dish, error => {
        if (error) {
          console.log(error);
        }

        console.log(`Created Blog Entry for ${dish.title}`);
      });
    }
  });
}
