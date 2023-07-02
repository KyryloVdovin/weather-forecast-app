import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.open-meteo.com/v1/'
});

export const weatherAPI = {
    getWeatherData() {
        return instance(`forecast?latitude=46.98&longitude=31.99&hourly=temperature_2m,relativehumidity_2m,rain,showers,cloudcover,visibility,windspeed_10m,is_day&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&windspeed_unit=ms&past_days=1&timezone=auto`)
            .then(response => {
                return response;
            });
    }
}