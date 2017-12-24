import Dish from '../models/Dish';
import Voter from '../models/Voter';

//Get Leaderboard
export function getLeaderboardData() {
  let dishPromise = Dish.find().populate('votes');
  let voterPromise = Voter.count({ voted: false });

  return Promise.all([dishPromise, voterPromise]).then(values => {
    let leaderboard = [];
    values[0].forEach(dish => {
      leaderboard.push(calculateScore(dish));
    });
    return { leaderboard, votesLeft: values[1] };
  });
}

function calculateScore(dish) {
  if (dish.votes.length === 0) {
    return {
      title: dish.title,
      image: dish.image,
      taste: 0,
      originality: 0,
      presentation: 0,
      total: 0
    };
  }

  let taste = 0;
  let originality = 0;
  let presentation = 0;

  dish.votes.forEach(vote => {
    taste += vote.taste;
    originality += vote.originality;
    presentation += vote.presentation;
  });

  taste = taste / dish.votes.length;
  originality = originality / dish.votes.length;
  presentation = presentation / dish.votes.length;

  let total = (taste + originality + presentation) / 3;

  return {
    title: dish.title,
    image: dish.image,
    taste,
    originality,
    presentation,
    total
  };
}
