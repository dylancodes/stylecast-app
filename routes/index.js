'use strict';

const apiFactory = require('../api/index.js');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('pages/main');
  });

  app.post('/api/v1/app', (req, res) => {

    const city_name = req.body.city_name;
    apiFactory(city_name)
    .then((fulfilled) => {
      console.log("API returned with success: " + fulfilled);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(`<img src="${fulfilled}">`);
      res.end();
    })
    .catch((error) => {
      console.log("API returned with failure: " + error);
      res.send("/* error response */");
    });
  });
}
