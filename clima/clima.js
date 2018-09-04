const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat }&lon=${ lng }&units=metric&appid=191127b368eb606f88aa4672830cd3fa`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}








