import { parseISO, format } from "date-fns";

function convertFahrenheitToCelsius(temperatureInFahrenheit) {
  return Math.trunc((temperatureInFahrenheit - 32) * (5 / 9));
}

function convertMphToMs(mph) {
  return (mph * 0.44704).toFixed(2);
}

function formatDate(dateStr) {
  const date = parseISO(dateStr);
  return format(date, "EEEE, MMMM d, yyyy");
}

export function formatWeatherData(weatherData) {
  return {
    temperature: convertFahrenheitToCelsius(weatherData.currentConditions.temp),
    description: weatherData.description,
    location: weatherData.resolvedAddress,
    feelslike: convertFahrenheitToCelsius(
      weatherData.currentConditions.feelslike,
    ),
    humidity: Math.round(weatherData.currentConditions.humidity),
    windspeed: convertMphToMs(weatherData.currentConditions.windspeed),
    day: formatDate(weatherData.days[0].datetime),
  };
}
