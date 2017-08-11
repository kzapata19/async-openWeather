let weather = require('./weather.js');
let location = require('./location.js');

weather(function(currentWeather){
  console.log(currentWeather);
});

location(function(location){
  if (!location) {
    console.log("Unable to guess location");
    return;
  }
  console.log(`city: ${location.city}`);
  console.log(`lat/lon: ${location.loc}`);
});

