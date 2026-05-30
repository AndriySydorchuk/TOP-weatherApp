export function convertTempToCelsius(temperatureInFahrenheit) {
  return Math.trunc((temp - 32) * (5 / 9));
}

export function convertMphToMs(mph) {
  return (mph * 0.44704).toFixed(2);
}
