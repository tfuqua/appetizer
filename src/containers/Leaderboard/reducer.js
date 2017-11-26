// @flow
import { GET_LEADERBOARD } from './actions';

function leaderboardReducer(state: Object = {}, action: Object) {
  switch (action.type) {
    case GET_LEADERBOARD:
      return {
        ...state,
        scores: action.leaderboard
      };
    default:
      return state;
  }
}

export default leaderboardReducer;
