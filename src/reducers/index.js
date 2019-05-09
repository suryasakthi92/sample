import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

import * as authenticationReducer from './authentication/authentication'
import * as common from './common/'
import * as homeReducer from "./home/home";
import * as navReducer from './navigation/navigation'
import * as dashboardReducer from './dashboard/dashboard'

const appReducer = combineReducers(Object.assign(

    authenticationReducer,
    common,
    homeReducer,
    navReducer,
    dashboardReducer,
    {form: formReducer},
));

export const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT' || action.type === 'SESSION_EXPIRED') {
        state = undefined;
    }
    return appReducer(state, action)
}