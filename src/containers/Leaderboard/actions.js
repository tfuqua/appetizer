// @flow
export const GET_LEADERBOARD = 'GET_LEADERBOARD';

export function receiveLeaderboard(results: Object) {
  return {
    type: GET_LEADERBOARD,
    leaderboard: results.leaderboard,
    votesLeft: results.votesLeft
  };
}
