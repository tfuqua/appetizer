import express from 'express';
const { getLeaderboard } = require('./service/leaderboardService');
const { getVoters } = require('./service/voterService');
const router = express.Router();

router.route('/leaderboard').get(getLeaderboard);
router.route('/voters').get(getVoters);

module.exports = router;
