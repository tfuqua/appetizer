//@flow
import Dish from '../models/Dish';
import Voter from '../models/Voter';
import Vote from '../models/Vote';

export default function() {
  createVoterData();
  createDishData();
  createVoteData();
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
        number: i,
        title: `Dish #${i}`,
        description: `Description for dish ${i}`
      });

      Dish.create(dish, error => {
        if (error) {
          console.log(error);
        }
      });
    }
  });
}

function createVoteData() {
  Vote.count().exec((err, count) => {
    if (count > 20) {
      return;
    }

    let dishPromise = Dish.findOne().exec();
    let voterPromise = Voter.findOne().exec();

    return Promise.all([dishPromise, voterPromise])
      .then(values => {
        let dish = values[0];
        let voter = values[1];

        const vote = new Vote({
          taste: 4,
          originality: 3,
          presentation: 5,
          dish: dish.id,
          voter: voter.id
        });

        voter.votes.push(vote);
        dish.votes.push(vote);
        dish.save();
        voter.save();

        Vote.create();
      })
      .catch(reason => {
        console.log(reason);
      });
  });
}
