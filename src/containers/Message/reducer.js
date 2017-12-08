// @flow
import { SHOW_MESSAGE, HIDE_MESSAGE } from './actions';

function messageReducer(state: Object = {}, action: { type: string, message: Object, container: string }) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        message: {
          message: action.message,
          container: action.container,
          show: true
        }
      };
    case HIDE_MESSAGE:
      return {
        message: {
          message: '',
          show: false
        }
      };
    default:
      return state;
  }
}

export default messageReducer;
