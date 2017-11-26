import express from 'express';
const { getLeaderboard } = require('./service/leaderboardService');
const router = express.Router();

router.route('/leaderboard').get(getLeaderboard);

module.exports = router;
