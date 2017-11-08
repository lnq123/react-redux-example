const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());
app.use(express.static('./client'));
app.use(morgan('dev'));
app.use(cors());

app.get('/user/login', (req, res) => {
  //implement logic for login
  res.status(200).send('login successful');
});
app.post('/user/register', (req, res) => {
  //implement logic for register
  res.status(200).send('register successful');
});

app.use('/client', express.static('./node_modules'));

app.get('/*', (request, response) => response.sendFile(path.resolve('./', 'client', 'index.html')));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});


module.exports = app;
