import "./style.css";

import { apiService } from "./apiService";
import { domManager } from "./domManager";

const userInputEl = document.getElementById("cityInput");
const gobackBtn = document.getElementById("gobackBtn");

userInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const userLocation = userInputEl.value.trim();

    apiService.getWeatherData(userLocation).then(function (weatherData) {
      domManager.renderInfoView(weatherData);

      console.log(weatherData);
    });
  }
});

gobackBtn.addEventListener("click", () => {
  domManager.renderHomeView();
});
