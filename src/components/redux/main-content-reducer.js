import { weatherAPI } from '../../api/api';
import { change } from 'redux-form';

const GET_WEATHER = 'GET_WEATHER';
const IS_FETCHING_SUCCESS = 'IS_FETCHING_SUCCESS';

const initialState = {
    weatherData: null,
    isFetchingSuccess: false,
};

const mainContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WEATHER:
            return {
                ...state,
                weatherData: action.weatherData
            }
        case IS_FETCHING_SUCCESS:
            return {
                ...state,
                isFetchingSuccess: action.isFetchingSuccess
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
const setIsFetching = (isFetchingSuccess) => {
    return {
        type: IS_FETCHING_SUCCESS,
        isFetchingSuccess
    }
};

export const getWeather = (latitude, longitude) => async (dispatch) => {
    dispatch(setIsFetching(false));
    let response = await weatherAPI.getWeatherData(latitude, longitude);

    if (response.status === 200) {
        dispatch(setIsFetching(true));
        dispatch(getWeatherData(response.data));
    }
}

export default mainContentReducer;