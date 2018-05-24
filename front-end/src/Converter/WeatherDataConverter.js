'use strict';

import getDayInWord from '../DateTime/DayService.js';
import {convertToFToC, capitaliseFirstLetter} from "../Weather/WeatherService";

function convertToDayWeather(fullData) {
  return {
    "day": computeDay(fullData.dt_txt),
    "minTemp": convertToFToC(fullData.main.temp_min),
    "maxTemp": convertToFToC(fullData.main.temp_max),
    "description": capitaliseFirstLetter(fullData.weather[0].description),
  }
}

function computeDay(fullDateString){
  console.log("fullDateString", fullDateString);
  let date = new Date(fullDateString);
  console.log("date", date);
  let dayInNum = date.getDay();

  return getDayInWord(dayInNum);
}

export {convertToDayWeather};