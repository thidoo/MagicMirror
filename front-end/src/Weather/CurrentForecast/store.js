import {createStore} from 'redux';
import updateCurrentWeather from './reducer';
const store = createStore(updateCurrentWeather);
