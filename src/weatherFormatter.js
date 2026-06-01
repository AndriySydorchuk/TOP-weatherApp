import { formatDate } from "./dateFormatter";

function formatAddress(address) {
  const addressTitleCased = address
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return addressTitleCased;
}

export function formatWeatherData(weatherData) {
  return {
    icon: weatherData.currentConditions.icon,
    temperature: Math.round(weatherData.currentConditions.temp) + "°C",
    description: weatherData.currentConditions.conditions,
    location: formatAddress(weatherData.resolvedAddress),
    feelslike: Math.round(weatherData.currentConditions.feelslike) + "°C",
    humidity: Math.round(weatherData.currentConditions.humidity) + "%",
    windspeed: weatherData.currentConditions.windspeed + " km/h",
    day: formatDate(weatherData.days[0].datetime),
  };
}
