// @flow
import { GET_VOTERS, GET_VOTER } from './actions';

function voteReducer(state: Object = {}, action: Object) {
  switch (action.type) {
    case GET_VOTERS:
      return {
        ...state,
        voters: action.voters
      };
    case GET_VOTER:
      return {
        ...state,
        voter: action.voter
      };
    default:
      return state;
  }
}

export default voteReducer;
