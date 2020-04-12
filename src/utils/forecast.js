const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=23c4c410f266f346fc739782fa0319d9&query=' + latitude + ',' + longitude + '?units=m'

    request({ url, json: true}, (error, { body }) => {        
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('No data available', undefined)
        } else {

            console.log(body.current)

            const summary = body.current.weather_descriptions[0]
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const precip = body.current.precip
            const humidity = body.current.humidity

            const data = summary + '. It is currently ' + temperature + ' degrees out. And it feels like ' + feelslike + ' degrees. With a precipitation chance of ' + precip + '%, and humidity of ' + humidity + '%.'
            
            callback(undefined, data)
        }
    })
}

module.exports = forecast