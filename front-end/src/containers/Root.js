import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/store';
import CurrentWeatherContainer from '../Weather/CurrentForecast/CurrentWeatherContainer';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <CurrentWeatherContainer/>
      </Provider>
    )
  }
}
