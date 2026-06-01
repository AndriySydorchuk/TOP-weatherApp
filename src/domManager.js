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
  const temperatureEl = document.querySelector(".general-info-temp");
  const descriptionEl = document.querySelector(".general-info-description");
  const locationEl = document.querySelector(".general-info-location");

  // additional info elements
  const feelslikeEl = document.querySelector(".add-info-feelslike");
  const humidityEl = document.querySelector(".add-info-humidity");
  const windspeedEl = document.querySelector(".add-info-windspeed");
  const dayEl = document.querySelector(".add-info-day");

  function setData(weatherData) {
    temperatureEl.textContent = weatherData.temperature;
    descriptionEl.textContent = weatherData.description;
    locationEl.textContent = weatherData.location;

    feelslikeEl.textContent = weatherData.feelslike;
    humidityEl.textContent = weatherData.humidity;
    windspeedEl.textContent = weatherData.windspeed;
    dayEl.textContent = weatherData.day;
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

  return { renderHomeView, renderInfoView, showLoading, showFailed };
})();

export { domManager };
