const request = require('request');

const API_KEY = process.env.API_KEY || '';

module.exports = (city_name) => {
  const city = city_name;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  return new Promise(
    function(resolve, reject) {
      request(url, (err, response, body) => {
        if(err) {
          reject
        }

      })
    }
  )

  // make request to OPEN Weather API
}
