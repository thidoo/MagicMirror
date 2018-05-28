import axios from "axios/index";

class WeatherHttpClient{

   // get = async (url,body) => {
   //   return await fetch(url, {method: 'GET', headers: {}, body: body});
   // },
   //
   // post = async (url,body) => {
   //   return await fetch(url, {method: 'POST', headers: {}, body: body});
   // },



  async fetchCurrentWeatherData(){

    return await fetch('http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31',
      {method: 'GET', headers: {}, body: {}});
    //
    // axios.get('http://api.openweathermap.org/data/2.5/weather?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31')
    //   .then( (response) => {
    //     //dispatch(updateCurrentWeather(response.data));
    //   })
    //   .catch( (error) => {
    //     console.log(error);
    //   });
  }

  fetchDailyWeatherData() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=Melbourne,au?&APPID=4a1fe1f56f0aca5ec03a7ba51fc9aa31')
      .then( (response) => {

      })
      .catch( (error) => {
        console.log(error);
      });
  }
}

export default WeatherHttpClient;