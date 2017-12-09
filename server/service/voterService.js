import Voter from '../models/Voter';
import Vote from '../models/Vote';

const VOTERS_SAVED = 'Voters Saved Sucessfully';
const VOTE_SAVED = 'Votes Saved!';

//Get Voters
export function getVoters(req, res) {
  let { voted } = req.query;

  if (voted !== undefined) {
    Voter.find()
      .where('voted')
      .equals(voted)
      .sort('name')
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  } else {
    Voter.find()
      .sort('name')
      .then(data => {
        res.send(data);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  }
}

export function getVoterByID(req, res) {
  Voter.findById(req.params.id)
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
}

export function saveVoters(req, res) {
  if (!req.body) return res.sendStatus(400);

  const voters = req.body;

  Voter.remove().then(err => {
    voters.forEach(v => {
      let voter = new Voter({ ...v });

      voter.save((err, data) => {
        if (err) {
          res.status(500).send(err);
          return;
        }
      });
    });
  });

  res.status(200).send({ message: VOTERS_SAVED });
}

function markVoterVoted(id: number) {
  Voter.update({ _id: id }, { $set: { voted: true } }).then(result => {});
}

export function saveVote(req, res) {
  if (!req.body) return res.sendStatus(400);

  const votes = req.body;

  votes.forEach(v => {
    let vote = new Vote({ ...v });

    vote.save((err, data) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
    });
  });

  markVoterVoted(votes[0].voter);

  res.status(200).send({ message: VOTE_SAVED });
}
