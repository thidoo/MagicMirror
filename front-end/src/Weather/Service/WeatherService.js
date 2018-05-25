function convertFromKelvinToCelcius(temperatureInF){
  return Math.round(temperatureInF - 273.15);
}

function capitaliseFirstLetter(description){
  return description.charAt(0).toUpperCase() + description.slice(1);
}

export {convertFromKelvinToCelcius, capitaliseFirstLetter};