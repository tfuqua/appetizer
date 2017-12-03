import Voter from '../models/Voter';

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

  Voter.find()
    .populate('votes')
    .then(data => {
      res.send(data);
    });
}
