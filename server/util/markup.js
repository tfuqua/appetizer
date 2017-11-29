const configDir =
  process.env.NODE_ENV !== 'production' ? '../../build/asset-manifest.json' : '../../asset-manifest.json';
var assets = require(configDir);

const markup = `
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<link href="/${assets['main.css']}" rel="stylesheet" >
<!-- insertion-point-jss -->


<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#1f3a56">
<link rel="manifest" href="/manifest.json">
<link rel="shortcut icon" href="/favicon.png" type="image/png" />
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500" rel="stylesheet">
<title>Appetizer Contest</title>
</head><body><div id="root"></div></body>
<script src="/${assets['main.js']}"></script>
</html>`;

export default markup;
