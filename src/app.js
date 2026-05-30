import { apiHandler } from "./apiHandler";
import { formatWeatherData } from "./convert";
import { domManager } from "./domManager";

export function loadWeather(userLocation) {
  const weatherData = apiHandler.getWeatherData(userLocation);

  weatherData.then(function (data) {
    const formattedWeatherData = formatWeatherData(data);

    domManager.renderInfoView(formattedWeatherData);

    console.log(data);
  });
}
