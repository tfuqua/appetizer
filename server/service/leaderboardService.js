import Dish from '../models/Dish';

//Get Leaderboard
export function getLeaderboardData() {
  let leaderboard = [];
  return Dish.find()
    .populate('votes')
    .then(data => {
      data.forEach(dish => {
        leaderboard.push(calculateScore(dish));
      });

      return leaderboard;
    });
}

function calculateScore(dish) {
  if (dish.votes.length === 0) {
    return {
      title: dish.title,
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
    taste,
    originality,
    presentation,
    total
  };
}
