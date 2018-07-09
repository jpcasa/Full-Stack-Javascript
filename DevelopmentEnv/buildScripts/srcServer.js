import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

// Define Port
const port = 3000;

// Creates Express App
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// Handles the home URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// Users JSON
app.get('/users', (req, res) => {
    res.json([
      {"id": 1, "firstName": "Bob", "lastName": "Smith", "email": "bob@gmail.com"},
      {"id": 2, "firstName": "John", "lastName": "Smith", "email": "j@gmail.com"},
      {"id": 3, "firstName": "Celia", "lastName": "Smith", "email": "c@gmail.com"}
    ]);
});

// App listens on the port or throws error
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
