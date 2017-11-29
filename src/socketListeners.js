import openSocket from 'socket.io-client';
import { receiveLeaderboard } from 'containers/Leaderboard/actions';

const socket = openSocket('http://localhost:8000');

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

export function vote() {
  console.log('test');
  return (dispatch: Function) => {
    socket.emit('vote');
  };
}
