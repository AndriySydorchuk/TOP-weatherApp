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

export function formatDate(dateStr) {
  const date = parseISO(dateStr);
  return format(date, "EEEE, MMMM d, yyyy");
}
