//@flow
import express from 'express';
import config from './config';
import assets from '../build/asset-manifest.json';

const app = express();
app.use(express.static('./build'));

app.use('*', (req, res) => {
  // This context object contains the results of the render
  const markup = `
  <!doctype html>
  <html lang="en">
  <head>
  <meta charset="utf-8">
  <!-- insertion-point-jss -->
  
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="theme-color" content="#1f3a56">
  <link rel="manifest" href="/manifest.json">
  <link rel="shortcut icon" href="/favicon.png" type="image/png" />
  <meta name="apple-mobile-web-app-title" content="Tekmetric">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">
  <link rel="apple-touch-startup-image" href="/icons/icon-128x128.png">
  <link rel="apple-touch-icon" href="/icons/icon-128x128.png">
  <link rel="apple-touch-icon" sizes="128x128" href="/icons/icon-128x128.png">
  <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png">
  <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png">
  <link rel="apple-touch-icon" sizes="384x384" href="/icons/icon-384x384.png">
  <link rel="apple-touch-icon" sizes="512x512" href="/icons/icon-512x512.png">
  <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500" rel="stylesheet">

  <title>Tekmetric</title>
  </head><body><div id="root"></div></body>
  <script src="/${assets['vendors.js']}"></script>
  <script src="/${assets['index.js']}"></script>
  </html>`;

  res.send(markup);
});

app.listen(config.port, () => {
  console.log(`App is up and running on ${config.port}`);
});

module.exports = app;
