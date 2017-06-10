const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/api/pets', (req, res, next) => {
  let url = "http://api.petfinder.com/shelter.getPets?key=576a9be0464ad49bafe9b98ad8b6eccb&id=TN172&count=200&output=full&format=json";
  request(url, (err, resp, body) => {
    if (res.statusCode === 200) {
      let pets = JSON.parse(body);
      res.send(pets.petfinder.pets.pet);
    }
  });
});

app.get('*', (req, res, next) => {
  res.status(200).sendFile(path.join(__dirname+'/public/index.html')); 
});

let port = process.env.PORT || 8080;
app.listen(port);
console.log(`listening on port ${process.env.port}`);
