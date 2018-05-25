import buildDay from '../../DateTime/Builder/DayBuilder';
import {convertFromKelvinToCelcius, capitaliseFirstLetter} from "../Service/WeatherService";

function convertToDayWeather(fullData) {
  return {
    "day": computeDay(fullData.dt_txt),
    "minTemp": convertFromKelvinToCelcius(fullData.main.temp_min),
    "maxTemp": convertFromKelvinToCelcius(fullData.main.temp_max),
    "description": capitaliseFirstLetter(fullData.weather[0].description),
  }
}

function computeDay(fullDateString){
  let date = new Date(fullDateString);
  return buildDay(date);
}

export {convertToDayWeather};