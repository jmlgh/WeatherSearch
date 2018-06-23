/* This reducer returns the weather state of the app */

import { FETCH_WEATHER } from '../actions/index'

// args: the state this reducer is responsible for (a list of data from the specified city)
// && the action its waiting for
export default function (state = [], action) {
    switch(action.type) {
        case FETCH_WEATHER:
            // we can access action.payload.data thanks to redux-promise which handles the data recovery for us
            // returns a new list
            return [ action.payload.data, ...state ]
    }
    // if the reducer gets any other action just return the current state
    return state
}