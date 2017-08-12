let weather = require('./weather.js');
let location = require('./location.js');
let argv = require('yargs')
  .option('location', {
      demand: false,
      alias: 'l',
      description: "city/location",
      type: 'string'
  })
  .help('help')
  .argv;

console.log(`this is argv ${JSON.stringify(argv.l)}`);
// weather(function(currentWeather){
//   console.log(currentWeather);
// });

// location(function(location){
//   if (!location) {
//     console.log("Unable to guess location");
//     return;
//   }
//   console.log(`city: ${location.city}`);
//   console.log(`lat/lon: ${location.loc}`);
// });

if(typeof argv.l === 'string' && argv.l.length > 0) {
    console.log("Location was provided");
    weather(argv.l, function(currentWeather){
      console.log(currentWeather);
    });
} else {
    console.log("Location was not given");
    location(function(location) {
      if(location) {
        weather(location.city, function(currentWeather) {
          console.log(currentWeather);
        });
      } else {
        console.log('Unable to guess location')
      }
    })
}
