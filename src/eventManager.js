import { domManager } from "./domManager";
import { loadWeather } from "./app";

const eventManager = (() => {
  function init() {
    bindGoBackBtn();
    bindUserInput();
  }

  function bindGoBackBtn() {
    const gobackBtn = document.getElementById("gobackBtn");

    gobackBtn.addEventListener("click", () => {
      domManager.renderHomeView();
    });
  }

  function bindUserInput() {
    const userInputEl = document.getElementById("cityInput");

    userInputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        const userLocation = userInputEl.value.trim();

        loadWeather(userLocation);
      }
    });
  }

  return { init };
})();

export { eventManager };
