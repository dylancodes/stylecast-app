'use strict';

const express = require('express');

const PORT = process.env.PORT || '3200';

const routeFactory = require('./routes/index.js');

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');

routeFactory(app);

app.listen(PORT, (err) => {
  if(err) console.log(err);
  console.log("Server Magic Happening on Port: " + PORT);
})
