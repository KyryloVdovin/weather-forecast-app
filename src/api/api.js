import axios from 'axios';

const weatherApiInstance = axios.create({
    baseURL: 'https://api.open-meteo.com/v1/'
});
const geocodingApiInstance = axios.create({
    baseURL: 'https://geocoding-api.open-meteo.com/v1/'
});

export const weatherAPI = {
    getWeatherData(latitude = 46.98, longitude = 31.99) {
        return weatherApiInstance(`forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,rain,showers,cloudcover,visibility,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,snowfall_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&windspeed_unit=ms&past_days=1&timezone=auto`)
            .then(response => {
                return response;
            });
    }
}
export const geocodingAPI = {
    getLocations(cityName) {
        return geocodingApiInstance(`search?name=${cityName}&count=10&language=en&format=json`)
            .then(response => {
                return response;
            });
    }
}