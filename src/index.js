import "./style.css";
import { apiHandler } from "./apiHandler";
import { convertFahrenheitToCelsius, convertMphToMs } from "./convert";

const userLocation = prompt("Type city name");

apiHandler.getWeatherData(userLocation).then(function (weatherData) {
  console.log(
    `${convertFahrenheitToCelsius(weatherData.currentConditions.temp)}°C`,
  );

  console.log(weatherData.description);

  console.log(weatherData.resolvedAddress);

  console.log(
    `Feels like: ${convertFahrenheitToCelsius(weatherData.currentConditions.feelslike)}°C`,
  );

  console.log(
    `Humidity: ${Math.round(weatherData.currentConditions.humidity)}%`,
  );

  console.log(
    `Wind speed: ${convertMphToMs(weatherData.currentConditions.windspeed)} m/s`,
  );

  console.log(`Day: ${weatherData.days[0].datetime}`);
});
