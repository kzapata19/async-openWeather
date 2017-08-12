let myKey = require('./config.js');
let request = require('request');
// function doWork(callback) {
//   callback('done');
// }

// function doWorkPromise(data) {
//   return new Promise (function(resolve, reject){
//     setTimeout(function() {
//       reject('everything is broken!')
//     }, 2000);
//     // reject({
//     //   error: 'something bad happened'
//     // }) //can only pass one argument inside reject
//   });
// }

// doWorkPromise('some data').then(function(data){
//   console.log(data);
// }, function(error) {
//   console.log(error);
// });

function getWeather (location) {

  let encodedLocation = encodeURIComponent(location)
  let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + encodedLocation + '&units=imperial&APPID=' + myKey;
  return new Promise (function(resolve, reject) {
    if(!location) {
        reject("no location provided");
    }

    request({
      url: url,
      json: true
    }, function(error, response, body){
        if(error) {
          reject("Unable to fetch weather");
        } else {
          resolve("It's " + body.main.temp + " in " + body.name);
        }
    });
  });
}

getWeather('Los Angeles').then(function(currentWeather) {
  console.log(currentWeather);
}, function (error) {
  console.log(error);
})


