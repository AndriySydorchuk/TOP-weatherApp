import { convertFahrenheitToCelsius, convertMphToMs } from "./convertUnits";
import { formatDate } from "./dateFormatter";

export function formatWeatherData(weatherData) {
  return {
    temperature:
      convertFahrenheitToCelsius(weatherData.currentConditions.temp) + "°C",
    description: weatherData.description,
    location: weatherData.resolvedAddress,
    feelslike:
      convertFahrenheitToCelsius(weatherData.currentConditions.feelslike) +
      "°C",
    humidity: Math.round(weatherData.currentConditions.humidity) + "%",
    windspeed: convertMphToMs(weatherData.currentConditions.windspeed) + "m/s",
    day: formatDate(weatherData.days[0].datetime),
  };
}
