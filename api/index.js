const request = require('request');
const createStylecast = require('./createStylecast');

const API_KEY = process.env.API_KEY || 'b9c2cc550d666a92b88d95d60c3b9405';

module.exports = (city_name) => {
  const city = city_name;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`;

  return new Promise(
    (resolve, reject) => {
      request(url, (err, response, body) => {
        if(err) {
          const reason = new Error("Error accessing weather API: " + err);
          reject(reason);
        } else {
          createStylecast(body)
          .then((fulfilled) => {
            resolve(fulfilled);
          })
          .catch((error) => {
            reject(error);
          })
        }
      });
    }
  )
}
