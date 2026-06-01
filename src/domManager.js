import { weatherIcons, conditionIcons } from "./iconsMap";
import { createElement } from "lucide";

const domManager = (() => {
  const userInputEl = document.getElementById("cityInput");

  //status boxes
  const loadingBox = document.querySelector(".loading-box");

  const failedBox = document.querySelector(".failed-box");
  const failedText = document.querySelector(".failed-box-text");

  // view elements
  const homeView = document.querySelector(".home-view");
  const infoView = document.querySelector(".info-view");

  //general info elenents
  const weatherIconEl = document.querySelector(".general-info-icon");
  const temperatureEl = document.querySelector(".general-info-temp");
  const descriptionEl = document.querySelector(".general-info-description");
  const locationIconEl = document.querySelector(".general-info-location-icon");
  const locationTextEl = document.querySelector(".general-info-location-text");

  // additional info elements
  const feelslikeIconEl = document.querySelector(".add-info-feelslike-icon");
  const feelslikeTextEl = document.querySelector(".add-info-feelslike-text");

  const humidityIconEl = document.querySelector(".add-info-humidity-icon");
  const humidityTextEl = document.querySelector(".add-info-humidity-text");

  const windspeedIconEl = document.querySelector(".add-info-windspeed-icon");
  const windspeedTextEl = document.querySelector(".add-info-windspeed-text");

  const dayEl = document.querySelector(".add-info-day");

  function init() {
    createConditionIcons();
  }

  function setData(weatherData) {
    const weatherIcon = createElement(weatherIcons[weatherData.icon]);
    weatherIconEl.append(weatherIcon);

    temperatureEl.textContent = weatherData.temperature;
    descriptionEl.textContent = weatherData.description;
    locationTextEl.textContent = weatherData.location;

    feelslikeTextEl.textContent = weatherData.feelslike;
    humidityTextEl.textContent = weatherData.humidity;
    windspeedTextEl.textContent = weatherData.windspeed;
    dayEl.textContent = weatherData.day;
  }

  function resetData() {
    userInputEl.value = "";

    weatherIconEl.innerHTML = "";
    temperatureEl.textContent = "";
    descriptionEl.textContent = "";
    locationTextEl.textContent = "";

    feelslikeTextEl.textContent = "";
    humidityTextEl.textContent = "";
    windspeedTextEl.textContent = "";
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
    hideLoading();
    setData(weatherData);
    showInfoView();
  }

  function renderHomeView() {
    resetData();
    showHomeView();
  }

  function showFailed(failedLocation) {
    hideLoading();

    failedBox.classList.remove("hidden");
    userInputEl.classList.add("failed");

    failedText.textContent += ` "${failedLocation}"`;

    userInputEl.value = "";
  }

  function hideFailed() {
    failedBox.classList.add("hidden");
    userInputEl.classList.remove("failed");

    failedText.textContent = "Failed fetch data for";
  }

  function showLoading() {
    loadingBox.classList.remove("hidden");

    hideFailed();
  }

  function hideLoading() {
    loadingBox.classList.add("hidden");
  }

  function createConditionIcons() {
    const locationIcon = createElement(conditionIcons["map-pin"]);
    locationIconEl.append(locationIcon);

    const feelslikeIcon = createElement(conditionIcons.thermometer);
    feelslikeIconEl.append(feelslikeIcon);

    const humidityIcon = createElement(conditionIcons.droplet);
    humidityIconEl.append(humidityIcon);

    const windIcon = createElement(conditionIcons.wind);
    windspeedIconEl.append(windIcon);
  }

  return { renderHomeView, renderInfoView, showLoading, showFailed, init };
})();

export { domManager };
