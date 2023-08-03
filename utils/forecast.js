const request = require('request');
const weatherstackAPI = 'a0c4f1dd8c3f87ea9040d544dc05b48c';
const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=` + weatherstackAPI + `&query='` + lat + ',' + long + '&units=f';
    // const weatherURL = 'http://api.weatherstack.com/current?access_key='+weatherstackAPI+'&query='+ lat+ ',' + long + +'&units=f';
    // console.log(weatherURL)
    request({
        url,
        json: true
    }, function (error, { body}, ) {
        if (error) {
            return callback('unable to connect to weatherstack services', undefined);
        }
        try {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.');
        } catch (error) {
            console.log('unable to find the location', error); // Print the error if one occurred
        }
    });
}

module.exports = forecast