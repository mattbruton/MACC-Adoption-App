const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname+'/public/index.html')); 
});

app.listen(8080);
console.log('listening on port 8080');
