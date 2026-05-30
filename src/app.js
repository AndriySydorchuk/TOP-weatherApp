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

export async function translateUkToEn(text) {
  try {
    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=uk|en`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}, ${response.statusText}`);
    }

    const translateData = await response.json();
    return translateData;
  } catch (error) {
    console.error("Fetch error", error);
  }
}
