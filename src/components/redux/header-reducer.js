import { geocodingAPI } from '../../api/api';

const SET_LOCATIONS = 'SET_LOCATIONS';
const SET_CURRENT_LOCATIONS = 'SET_CURRENT_LOCATIONS';
const IS_FETCHING_SUCCESS = 'IS_FETCHING_SUCCESS';

const initialState = {
    foundLocations: null,
    country: 'Ukraine',
    city: 'Mykolaiv',
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOCATIONS:
            return {
                ...state,
                foundLocations: action.foundLocations
            }
        case SET_CURRENT_LOCATIONS:
            return {
                ...state,
                country: action.country,
                city: action.city
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

const setLocations = (foundLocations) => {
    return {
        type: SET_LOCATIONS,
        foundLocations
    }
};
const setCurrentLocation = (country, city) => {
    return {
        type: SET_CURRENT_LOCATIONS,
        country, city
    }
};
const setIsFetching = (isFetchingSuccess) => {
    return {
        type: IS_FETCHING_SUCCESS,
        isFetchingSuccess
    }
};

export const getLocationsData = (cityName) => async (dispatch) => {
    // dispatch(setIsFetching(false));
    let response = await geocodingAPI.getLocations(cityName);

    if (response.status === 200) {
        // dispatch(setIsFetching(true));
        console.log(response.data.results);
        dispatch(setLocations(response.data.results));
    }
}
export const setCurrentLocationData = (country, city) => async (dispatch) => {
    dispatch(setCurrentLocation(country, city));
}

export default headerReducer;