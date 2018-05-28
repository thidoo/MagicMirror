class WeatherService {

  constructor(weatherHttpClient, weatherDataConverter){
    this.weatherHttpClient = weatherHttpClient;
    this.weatherDataConverter = weatherDataConverter;
  }

  getCurrentWeather(){
    let fullCurrentWeatherData = this.weatherHttpClient.fetchCurrentWeatherData();
    return this.weatherDataConverter.convertCurrentWeatherData(fullCurrentWeatherData);
  }

  getDailyWeatherList(){
    let fullDailyWeatherData = this.weatherHttpClient.fetchDailyWeatherData();
    return this.weatherDataConverter.convertDailyWeatherData(fullDailyWeatherData);
  }

}

export default WeatherService;