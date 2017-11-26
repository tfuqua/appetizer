import Voter from '../models/Voter';

//Get Leaderboard
export function getVoters(req, res) {
  Voter.find()
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
}
