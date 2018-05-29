import fetch from 'cross-fetch';

export const CURRENT_WEATHER_UPDATE = 'CURRENT_WEATHER_UPDATE';

export const REQUEST_CURRENT_WEATHER = 'REQUEST_CURRENT_WEATHER';
export const RECEIVE_CURRENT_WEATHER = 'RECEIVE_CURRENT_WEATHER';

export const updateCurrentWeather = currentWeather => ({
  type: CURRENT_WEATHER_UPDATE,
  currentWeather
});

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

export function fetchCurrentWeather(url, dataConverter){
  return dispatch => {
    dispatch(requestCurrentWeather());

    return fetch(url)
      .then(response => response.json())
      .then(fullData => dataConverter.convertCurrentWeatherData(fullData))
      .then(currentWeatherData => dispatch(receiveCurrentWeather(currentWeatherData)))
  }
}
// dispatch(getCurrentWeather);
//
// getCurrentWeather = (dispatch) => {
//
//     dispatch({
//       type: CURRENT_WEATHER_LOADING
//     });
//
//     weatherApi.get().then((data) => {
//         dispatch({
//           type: CURRENT_WEATHER_SUCCESS,
//           payload: data
//         })
//     }).catch(() => {
//       dispatch({
//         type: CURRENT_WEATHER_FAILURE,
//         payload: data
//       });
//     });
//
//
// }