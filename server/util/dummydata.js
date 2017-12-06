//@flow
import Dish from '../models/Dish';
import Voter from '../models/Voter';
import Vote from '../models/Vote';

export default function() {
  Voter.count()
    .exec((err, count) => {
      if (count === 0) {
        createVoterData();
      }
    })
    .then(() => {
      Dish.count()
        .exec((err, count) => {
          if (count === 0) {
            createDishData();
          }
        })
        .then(() => {
          Vote.count().exec((err, count) => {
            if (count === 0) {
              createVoteData();
            }
          });
        });
    });
}

function createVoterData() {
  console.log('Creating Voter Data');

  voters.forEach(v => {
    const voter = new Voter(v);

    Voter.create(voter, error => {
      if (error) {
        console.log(error);
      }
    });
  });

  console.log('Complete Creating Voter Data');
}

function createDishData() {
  console.log('Creating Dish Data');

  for (let i = 0; i < 11; i++) {
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

  console.log('Complete Dish Voter Data');
}

function createVoteData() {
  console.log('Creating Vote Data');

  let dishPromise = Dish.find().exec();
  let voterPromise = Voter.find().exec();

  Promise.all([dishPromise, voterPromise])
    .then(values => {
      let dishes = values[0];
      let voters = values[1];

      voters.forEach(voter => {
        dishes.forEach(dish => {
          const vote = new Vote({
            taste: getRandomScore(),
            originality: getRandomScore(),
            presentation: getRandomScore(),
            dish: dish.id,
            voter: voter.id
          });

          Vote.create(vote, error => {
            if (error) {
              console.log(error);
            }
          });
        });
      });
    })
    .catch(reason => {
      console.log(reason);
    });

  console.log('Complete Creating Vote Data');
}

function getRandomScore() {
  let min = 1;
  let max = 5;

  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

const voters = [
  { name: 'Donna', voted: false },
  { name: 'Ty', voted: false },
  { name: 'Susan', voted: false },
  { name: 'Glenn', voted: false },
  { name: 'Patrick', voted: false },
  { name: 'Taylor', voted: false },
  { name: 'Olin', voted: false },
  { name: 'Linden', voted: false }
];
