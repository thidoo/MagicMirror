import { combineReducers } from 'redux';

import {RECEIVE_CURRENT_WEATHER, REQUEST_CURRENT_WEATHER} from "../Weather/CurrentForecast/actions";

const initialState = {
  isFetching: false,
  error: null,
  currentWeather: {},
};

function updateCurrentWeather(state = initialState, action){

  switch (action.type){
    case REQUEST_CURRENT_WEATHER:
      return Object.assign({}, state, {
        isFetching: true,
      })
    case RECEIVE_CURRENT_WEATHER:
      return Object.assign({}, state, {
        isFetching: false,
        currentWeather: action.currentWeather,
      })
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  updateCurrentWeather,
})

export default rootReducer;

