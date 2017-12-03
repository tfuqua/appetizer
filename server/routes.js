import express from 'express';
const { getLeaderboard } = require('./service/leaderboardService');
const { getVoters, saveVoters } = require('./service/voterService');
const router = express.Router();

router.route('/leaderboard').get(getLeaderboard);
router.route('/voters').get(getVoters);
router.route('/voters').post(saveVoters);

module.exports = router;
