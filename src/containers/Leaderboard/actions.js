// @flow
export const GET_LEADERBOARD = 'GET_LEADERBOARD';

export function receiveLeaderboard(leaderboard: Array<Object>) {
  return {
    type: GET_LEADERBOARD,
    leaderboard
  };
}
