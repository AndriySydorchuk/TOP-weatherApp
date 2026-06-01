import { convertFahrenheitToCelsius, convertMphToMs, formatDate } from ".";

const domManager = (() => {
  const userInputEl = document.getElementById("cityInput");

  // view elements
  const homeView = document.querySelector(".home-view");
  const infoView = document.querySelector(".info-view");

  //general info elenents
  const temperatureEl = document.querySelector(".general-info-temp");
  const descriptionEl = document.querySelector(".general-info-description");
  const locationEl = document.querySelector(".general-info-location");

  // additional info elements
  const feelslikeEl = document.querySelector(".add-info-feelslike");
  const humidityEl = document.querySelector(".add-info-humidity");
  const windspeedEl = document.querySelector(".add-info-windspeed");
  const dayEl = document.querySelector(".add-info-day");

  function setData(weatherData) {
    temperatureEl.textContent =
      convertFahrenheitToCelsius(weatherData.currentConditions.temp) + "°C";
    descriptionEl.textContent = weatherData.description;
    locationEl.textContent = weatherData.resolvedAddress;

    feelslikeEl.textContent =
      convertFahrenheitToCelsius(weatherData.currentConditions.feelslike) +
      "°C";
    humidityEl.textContent =
      Math.round(weatherData.currentConditions.humidity) + "%";
    windspeedEl.textContent =
      convertMphToMs(weatherData.currentConditions.windspeed) + "m/s";
    dayEl.textContent = formatDate(weatherData.days[0].datetime);
  }

  function resetData() {
    userInputEl.value = "";

    temperatureEl.textContent = "";
    descriptionEl.textContent = "";
    locationEl.textContent = "";

    feelslikeEl.textContent = "";
    humidityEl.textContent = "";
    windspeedEl.textContent = "";
    dayEl.textContent = "";
  }

  function showHomeView() {
    homeView.classList.remove("hidden");
    infoView.classList.add("hidden");
  }

  function showInfoView() {
    homeView.classList.add("hidden");
    infoView.classList.remove("hidden");
  }

  function renderInfoView(weatherData) {
    setData(weatherData);
    showInfoView();
  }

  function renderHomeView() {
    resetData();
    showHomeView();
  }

  return { renderHomeView, renderInfoView };
})();

export { domManager };
