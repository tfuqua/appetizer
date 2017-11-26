// @flow
import { GET_VOTERS } from './actions';

function voteReducer(state: Object = {}, action: Object) {
  switch (action.type) {
    case GET_VOTERS:
      return {
        ...state,
        voters: action.voters
      };
    default:
      return state;
  }
}

export default voteReducer;
