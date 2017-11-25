module.exports = (weatherId) => {
  return new Promise(
    (resolve, reject) => {
      let weatherKind = "";
      if(weatherId >= 200 && weatherId <= 299) {
        weatherKind = "thunderstorm";
        resolve(weatherKind);
      }
      else if(weatherId >= 300 && weatherId <= 399) {
        weatherKind = "drizzle";
        resolve(weatherKind);
      }
      else if(weatherId >= 500 && weatherId <= 599) {
        weatherKind = "rain";
        resolve(weatherKind);
      }
      else if(weatherId >= 600 && weatherId <= 699) {
        weatherKind = "snow";
        resolve(weatherKind);
      }
      else if(weatherId == 800) {
        weatherKind = "clear sky";
        resolve(weatherKind);
      }
      else if(weatherId >= 801 && weatherId < 810) {
        weatherKind = "cloudy";
        resolve(weatherKind);
      }
      else {
        const reason = new Error("Invalid weather id response");
        reject(reason);
      }
    }
  )
};
