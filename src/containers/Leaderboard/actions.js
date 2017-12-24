// @flow
export const GET_LEADERBOARD = 'GET_LEADERBOARD';

export function receiveLeaderboard(leaderboard: Array<Object>) {
  console.log(leaderboard);
  return {
    type: GET_LEADERBOARD,
    leaderboard
  };
}
