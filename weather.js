let myKey = require('./config.js');
let request = require('request');

module.exports = function (location, callback) {
  let encodedLocation = encodeURIComponent(location)
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&APPID=' + myKey;
  if(!location) {
    return callback("no location provided");
  }

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
