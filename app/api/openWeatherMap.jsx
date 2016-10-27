var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=c60b7208bb92efdc1079c99a9a4f46b4';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      return res.data.list[0].main.temp;
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};