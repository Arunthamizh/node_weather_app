const request = require('request');
const geocode1 = require('./utils/geocode');
const forecast1 = require('./utils/forecast');
// console.log('prcess', process)
const address = process.argv[2];
if (address) {
                            // below is the object destructuring from geocode.js retun data
  geocode1(address, (error, {latitude, longtitude, place_name}) => {
    if (error) {
      return console.log('error', error);
    }
    forecast1(latitude, longtitude, (error, forecastdata) => {
      // console.log('Error', error)
      console.log('Data',place_name);
      console.log('Data', forecastdata);
    })
  });
} else {
  console.log('Please provide the address');
}

// run  >>  node app.js 'pondicherry'