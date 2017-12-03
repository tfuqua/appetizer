// @flow
import { combineReducers } from 'redux';

import adminReducer from 'containers/Admin/reducer';
import messageReducer from 'containers/Message/reducer';
import leaderboardReducer from 'containers/Leaderboard/reducer';
import voteReducer from 'containers/Vote/reducer';

const reducer: Function = combineReducers({
  admin: adminReducer,
  messages: messageReducer,
  leaderboard: leaderboardReducer,
  vote: voteReducer
});

export default reducer;
