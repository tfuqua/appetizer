import SocketIO from 'socket.io';
import { getLeaderboardData } from './service/leaderboardService';

function socketInit(server) {
  const io = new SocketIO(server);

  io.on('connection', socket => {
    socket.on('fetchScores', data => {
      getLeaderboardData().then(results => {
        socket.emit('getScores', results);
      });
    });
  });
}
export default socketInit;
