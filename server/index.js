//@flow
import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import SocketIO from 'socket.io';

import markup from './util/markup';
import dummydata from './util/dummydata';
import config from './config';
import routes from './routes';

const app = express();
const server = http.Server(app);
const io = new SocketIO(server);

app.use('/api', routes);
app.use(express.static('./build'));

app.use('*', (req, res) => {
  // This context object contains the results of the render

  res.send(markup);
});

// MongoDB Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURL, { useMongoClient: true }, error => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  if (process.env.NODE_ENV === 'development') {
    dummydata();
  }
});

io.on('connection', function(socket) {
  socket.on('my other event', function(data) {
    socket.emit('news', { data });
  });
});

server.listen(config.port, () => {
  console.log(`App is up and running on ${config.port}`);
});

module.exports = app;
