const checkWeatherId = require("./checkWeatherId");

module.exports = (body) => {
  return new Promise(
    (resolve, reject) => {
      const weatherBody = JSON.parse(body);
      const weatherId = weatherBody.weather[0].id;
      const weatherType = weatherBody.weather[0].main;
      const temperature = weatherBody.main.temp;
      const description = weatherBody.weather[0].description;
      let weatherData = {};

      checkWeatherId(weatherId)
      .then((fulfilled) => {
        weatherData = {
          "id": weatherId,
          "kind": fulfilled,
          "type": weatherType,
          "temperature": temperature,
          "description": description
        };
        return weatherData;
      })
      .then((weatherData) => {
        if(weatherData.kind == "thunderstorm" || weatherData.kind == "drizzle" || weatherData.kind == "rain") {
          const image = "public/img/004-umbrella.png";
          resolve(image);
        } else if(weatherData.kind == "snow") {
          const image = "public/img/003-boot.png";
          resolve(image);
        } else if (weatherData.kind == "clear sky") {
          const image = "public/img/002-sunglasses.png";
          resolve(image);
        } else if(weatherData.kind == "cloudy") {
          const image = "public/img/001-jacket.png";
          resolve(image);
        } else {
          reject(new Error("Invalid weather kind"));
        }
      })
      .catch((error) => {
        reject(error);
      });
    }
  )
}
