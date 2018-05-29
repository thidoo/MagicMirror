import fetch from 'cross-fetch';

export const REQUEST_CURRENT_WEATHER = 'REQUEST_CURRENT_WEATHER';
export const RECEIVE_CURRENT_WEATHER = 'RECEIVE_CURRENT_WEATHER';

function requestCurrentWeather(){
  return {
    type: REQUEST_CURRENT_WEATHER
  }
}

function receiveCurrentWeather(currentWeather){
  return {
    type: RECEIVE_CURRENT_WEATHER,
    currentWeather,
  }
}

export function fetchCurrentWeatherData(url, dataConverter){
  return dispatch => {
    dispatch(requestCurrentWeather());

    return fetch(url)
      .then(response => response.json())
      .then(fullData => dataConverter.convertCurrentWeatherData(fullData))
      .then(currentWeatherData => dispatch(receiveCurrentWeather(currentWeatherData)))
  }
}
