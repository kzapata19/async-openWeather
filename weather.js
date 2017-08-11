let myKey = require('./config.js');
let request = require('request');
let url = 'http://api.openweathermap.org/data/2.5/weather?id=5368361&units=imperial&APPID=' + myKey;

module.exports = function (callback) {
  request({
    url: url,
    json: true
  }, function(error, response, body){
      if(error) {
        callback("Unable to fetch weather");
      } else {
        callback("It's " + body.main.temp + " in " + body.name);
      }
  });
}
