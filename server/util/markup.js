//@flow
import assets from '../../build/asset-manifest.json';

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
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500" rel="stylesheet">
<title>Appetizer Contest</title>
</head><body><div id="root"></div></body>
<script src="/${assets['vendors.js']}"></script>
<script src="/${assets['index.js']}"></script>
</html>`;

export default markup;
