import { formatDate } from "./dateFormatter";

export function formatWeatherData(weatherData) {
  return {
    temperature: Math.round(weatherData.currentConditions.temp) + "°C",
    description: weatherData.currentConditions.conditions,
    location: weatherData.resolvedAddress,
    feelslike: Math.round(weatherData.currentConditions.feelslike) + "°C",
    humidity: Math.round(weatherData.currentConditions.humidity) + "%",
    windspeed: weatherData.currentConditions.windspeed + " km/h",
    day: formatDate(weatherData.days[0].datetime),
  };
}
