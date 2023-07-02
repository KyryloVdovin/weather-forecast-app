import { weatherAPI } from '../../api/api';

const GET_WEATHER = 'GET_WEATHER';
const IS_FETCHING = 'IS_FETCHING';

const initialState = {
    weatherData: null,
    isFetching: true
};

const mainContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                weatherData: action.weatherData
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const getWeatherData = (weatherData) => {
    return {
        type: GET_WEATHER,
        weatherData
    }
};
const setIsFetching = (isFetching) => {
    return {
        type: IS_FETCHING,
        isFetching
    }
};

export const getWeather = () => async (dispatch) => {
    dispatch(setIsFetching(true));
    let response = await weatherAPI.getWeatherData();

    if (response.status === 200) {
        dispatch(setIsFetching(false));
        dispatch(getWeatherData(response.data));
    }
}

export default mainContentReducer;