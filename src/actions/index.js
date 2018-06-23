// An action creator (API request)
import axios from 'axios'

const API_KEY = '0f0c3ffe32484f395ad4d96a8d5fb54b'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// action type, later used by the reducers
export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},es`
    // we put the request in the payload of the action
    // because we know react-promise will take care of it
    const request = axios.get(url)

    // return the action
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}