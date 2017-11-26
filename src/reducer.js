// @flow
import { combineReducers } from 'redux';

import messageReducer from 'containers/Message/reducer';

const reducer: Function = combineReducers({
  messages: messageReducer
});

export default reducer;
