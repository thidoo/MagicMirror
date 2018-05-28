export const CURRENT_WEATHER_UPDATE = 'CURRENT_WEATHER_UPDATE';

export const updateCurrentWeather = currentWeather => ({
    type: CURRENT_WEATHER_UPDATE,
    currentWeather
});
