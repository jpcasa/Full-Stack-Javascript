import express from 'express';
import path from 'path';
import open from 'open';

// Define Port
const port = 3000;

// Creates Express App
const app = express();

// Handles the home URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

// App listens on the port or throws error
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
