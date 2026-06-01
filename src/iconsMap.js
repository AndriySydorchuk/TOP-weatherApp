import {
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSun,
  CloudMoon,
  MapPin,
  Thermometer,
  Droplet,
  Wind,
} from "lucide";

const weatherIcons = {
  "partly-cloudy-day": CloudSun,
  "partly-cloudy-night": CloudMoon,
  rain: CloudRain,
  cloudy: Cloud,
  "clear-day": Sun,
  "clear-night": Moon,
};

const conditionIcons = {
  "map-pin": MapPin,
  thermometer: Thermometer,
  droplet: Droplet,
  wind: Wind,
};

export { weatherIcons, conditionIcons };
