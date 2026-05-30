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
    temperatureEl.textContent = weatherData.temperature + "°C";
    descriptionEl.textContent = weatherData.description;
    locationEl.textContent = weatherData.location;

    feelslikeEl.textContent = weatherData.feelslike + "°C";
    humidityEl.textContent = weatherData.humidity + "%";
    windspeedEl.textContent = weatherData.windspeed + "m/s";
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
