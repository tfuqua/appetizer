//@flow
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';

import markup from './util/markup';
import dummydata from './util/dummydata';
import config from './config';
import routes from './routes';
import socketInit from './socket';

const app = express();
const server = http.Server(app);
socketInit(server); //Setup Websocket

app.use(bodyParser.json());
app.use('/api', routes);
app.use('/static', express.static(path.join(__dirname, '../static')));

app.use('*', (req, res) => res.send(markup));

// MongoDB Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURL, { useMongoClient: true }, error => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }

  console.log('Connected to Mongo');

  //if (process.env.NODE_ENV === 'development') {
  dummydata();
  //}
});

server.listen(config.port, () => {
  console.log(`App is up and running on ${config.port}`);
});

module.exports = app;
