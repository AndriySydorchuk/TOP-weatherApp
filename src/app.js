import { apiService } from "./apiService";
import { domManager } from "./domManager";
import { formatWeatherData } from "./weatherFormatter";

const app = (() => {
  const userInputEl = document.getElementById("cityInput");
  const gobackBtn = document.getElementById("gobackBtn");

  function handleSearch() {
    const userLocation = userInputEl.value.trim();

    if (!userLocation) return;

    domManager.showLoading();

    apiService
      .getWeatherData(userLocation)
      .then((weatherData) => {
        console.log(weatherData);
        return formatWeatherData(weatherData);
      })
      .then(domManager.renderInfoView)
      .catch((err) => domManager.showFailed(userLocation));
  }

  function init() {
    userInputEl.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    });

    gobackBtn.addEventListener("click", () => {
      domManager.renderHomeView();
    });
  }

  return { init };
})();

export { app };
