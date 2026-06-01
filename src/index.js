import "./style.css";

import { apiHandler } from "./apiHandler";
import { domManager } from "./domManager";
import { parseISO, format } from "date-fns";

const userInputEl = document.getElementById("cityInput");
const gobackBtn = document.getElementById("gobackBtn");

userInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const userLocation = userInputEl.value.trim();

    apiHandler.getWeatherData(userLocation).then(function (weatherData) {
      domManager.renderInfoView(weatherData);

      console.log(weatherData);
    });
  }
});

gobackBtn.addEventListener("click", () => {
  domManager.renderHomeView();
});

export function convertFahrenheitToCelsius(temperatureInFahrenheit) {
  return Math.trunc((temperatureInFahrenheit - 32) * (5 / 9));
}

export function convertMphToMs(mph) {
  return (mph * 0.44704).toFixed(2);
}

export function formatDate(dateStr) {
  const date = parseISO(dateStr);
  return format(date, "EEEE, MMMM d, yyyy");
}
