import express from 'express';
const { getVoters, getVoterByID, saveVoters, saveVote } = require('./service/voterService');
const { getDishes, saveDishes } = require('./service/dishService');
const router = express.Router();

router.route('/voters').get(getVoters);
router.route('/voters/:id').get(getVoterByID);
router.route('/voters').post(saveVoters);
router.route('/dishes').get(getDishes);
router.route('/dishes').post(saveDishes);
router.route('/vote').post(saveVote);

module.exports = router;
