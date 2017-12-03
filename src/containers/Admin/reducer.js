// @flow
import { GET_VOTERS, GET_DISHES } from './actions';

function adminReducer(state: Object = {}, action: Object) {
  switch (action.type) {
    case GET_VOTERS:
      return {
        ...state,
        voters: action.voters
      };
    case GET_DISHES:
      return {
        ...state,
        dishes: action.dishes
      };
    default:
      return state;
  }
}

export default adminReducer;
