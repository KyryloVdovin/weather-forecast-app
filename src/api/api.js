import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.open-meteo.com/v1/'
});

export const weatherAPI = {
    getWeatherData() {
        return instance(`forecast?latitude=${46.83}&longitude=${31.99}&hourly=temperature_2m,relativehumidity_2m,rain,showers,weathercode,cloudcover,visibility,windspeed_10m,is_day&models=icon_eu&daily=weathercode,temperature_2m_max,temperature_2m_min,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&past_days=1&timezone=auto`)
            .then(response => {
                return response;
            });
    }
}