const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

app.get('/listing/:listingId', (req, res) => {
  console.log('listingId', req.params.listingId);
  const id = req.params.listingId;
  Photos.find({ listingId: id })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

const html = path.join(__dirname, '/public/index.html');

app.get('/:listingId', (req, res) => {
  res.sendFile(html);
});
