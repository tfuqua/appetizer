// @flow
import request from 'util/fetch';
import { displayMessage, HEADER_LOCATION } from '../Message/actions';
import { API_LEADERBOARD } from '../../api';

export const GET_LEADERBOARD = 'GET_LEADERBOARD';

function receiveLeaderboard(leaderboard) {
  return {
    type: GET_LEADERBOARD,
    leaderboard
  };
}

export function getLeaderboard() {
  return (dispatch: Function) => {
    return request(API_LEADERBOARD)
      .then(leaderboard => dispatch(receiveLeaderboard(leaderboard)))
      .catch(error => {
        Promise.resolve(error).then(err => {
          dispatch(displayMessage(err, HEADER_LOCATION));
        });
      });
  };
}
