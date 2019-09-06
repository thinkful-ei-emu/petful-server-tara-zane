const express = require('express');
const cors = require('cors');
const cats = require('./stores/cats');
const dogs = require('./stores/dogs');

const app = express();
app.use(cors());


app.get('/api/cat', (req, res) => {
  res.json(cats[0]);
})

app.get('/api/dog', (req, res) => {
  res.json(dogs[0]);
})
// Catch-all Error handler
// Add NODE_ENV check to prevent stacktrace leak
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(8080,()=>{
  console.log('Serving on 8080');
});