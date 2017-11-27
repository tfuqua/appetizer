import Voter from '../models/Voter';
import Vote from '../models/Vote';

//Get Voters
export function getVoters(req, res) {
  Voter.find()
    .populate('votes')
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
}
