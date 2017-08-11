let request = require('request');

let url = 'http://api.openweathermap.org/data/2.5/weather?id=5368361&units=imperial&APPID=176951b0f160592c7445ce8ff4a00643'

request({
  url: url,
  json: true
}, function(error, response, body){
  if(error) {
    console.log("Unable to fetch weather")
  } else {
    console.log(JSON.stringify(body, null, 4));
    console.log(`It's ${body.main.temp} in ${body.name}.`)
  }
});

setTimeout(function() { console.log("this will run last")}, 5000);