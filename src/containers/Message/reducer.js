// @flow
import { SHOW_MESSAGE, HIDE_MESSAGE } from './actions';

function messageReducer(state: Object = {}, action: { type: string, message: Object, container: string }) {
  switch (action.type) {
    case SHOW_MESSAGE:
      return {
        message: {
          type: action.message.type,
          message: action.message.message,
          details: action.message.details,
          container: action.container,
          show: true
        }
      };
    case HIDE_MESSAGE:
      return {
        message: {
          type: '',
          message: '',
          show: false
        }
      };
    default:
      return state;
  }
}

export default messageReducer;
