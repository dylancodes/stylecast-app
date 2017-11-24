'use strict';

const apiFactory = require('../api/index.js');

module.exports = (app) => {
  app.get('/', (req, res) {
    res.render('pages/main');
  });

  app.post('/api/v1/go', (req, res) {
    let city_name = JSON.parse(req.city_name);

    apiFactory(city_name)
    .then((fulfilled) => {
      console.log("API returned with success: " + fulfilled);
      res.send(/* icon */);
    })
    .catch((error) => {
      console.log("API returned with failure: " + error);
      res.send(/* error response */);
    });
  });
}
