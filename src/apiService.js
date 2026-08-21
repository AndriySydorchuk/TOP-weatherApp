const apiService = (() => {
  const API_KEY = process.env.WEATHER_API_KEY;
  const API_ENDPOINT =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

  async function getWeatherData(location) {
    try {
      const response = await fetch(
        `${API_ENDPOINT}${location}?key=${API_KEY}&unitGroup=metric`,
      );

      if (!response.ok) {
        throw new Error(
          `HTTP Error: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Fetch failed: ", error);
      throw error;
    }
  }

  return { getWeatherData };
})();

export { apiService };
