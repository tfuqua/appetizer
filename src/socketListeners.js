import openSocket from 'socket.io-client';
import { receiveLeaderboard } from 'containers/Leaderboard/actions';

const socket = openSocket(
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://app.taylorfuqua.com'
);

export default function(dispatch, getState) {
  socket.on('getScores', data => {
    dispatch(receiveLeaderboard(data));
  });
}

export function fetchScores() {
  return (dispatch: Function) => {
    socket.emit('fetchScores');
  };
}

export function emitVote() {
  return (dispatch: Function) => {
    socket.emit('vote');
  };
}
