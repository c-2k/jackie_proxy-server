const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 8081;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../public/index.html`))
});

const html = path.join(__dirname, '/public/index.html');

app.get('/:listingId', (req, res) => {
  res.sendFile(html);
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});