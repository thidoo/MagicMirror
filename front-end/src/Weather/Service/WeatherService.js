class WeatherService {

  constructor(weatherHttpClient, weatherDataConverter){
    this.weatherHttpClient = weatherHttpClient;
    this.weatherDataConverter = weatherDataConverter;
  }

  async getCurrentWeather(){
    let fullCurrentWeatherData = await this.weatherHttpClient.fetchCurrentWeatherData();
    let weatherData = await fullCurrentWeatherData.json();
    return this.weatherDataConverter.convertCurrentWeatherData(weatherData);
  }

  getDailyWeatherList(){
    let fullDailyWeatherData = this.weatherHttpClient.fetchDailyWeatherData();
    return this.weatherDataConverter.convertDailyWeatherData(fullDailyWeatherData);
  }

}

export default WeatherService;