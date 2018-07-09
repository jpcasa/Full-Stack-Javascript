const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

// Declare Express App
const app = express();

// Debugging Options
app.use(morgan('tiny'));

// To use static files
app.use(express.static(path.join(__dirname, '/public')));

// Include static libraries from npm installs
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));

// Serve URLs
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

// Listens to the app in port 3000
app.listen(3000, () => {
  debug(chalk.green('Listening on port 3000!'));
});
