import {CURRENT_WEATHER_UPDATE} from "./actions";

const initialState = {
  currentWeather: {},
};

function updateCurrentWeather(state = initialState, action){

  switch (action.type){
    case CURRENT_WEATHER_UPDATE:
      return Object.assign({}, state, {
        currentWeather: action.currentWeather,
      })
  }
}

export default updateCurrentWeather;

