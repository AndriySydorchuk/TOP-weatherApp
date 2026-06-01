import "./style.css";

import { apiService } from "./apiService";
import { domManager } from "./domManager";
import { formatWeatherData } from "./weatherFormatter";

const userInputEl = document.getElementById("cityInput");
const gobackBtn = document.getElementById("gobackBtn");

userInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const userLocation = userInputEl.value.trim();

    apiService
      .getWeatherData(userLocation)
      .then((weatherData) => {
        console.log(weatherData);
        return formatWeatherData(weatherData);
      })
      .then(domManager.renderInfoView)
      .catch((err) => domManager.showFailed(userLocation));
  }
});

gobackBtn.addEventListener("click", () => {
  domManager.renderHomeView();
});
