/**
 * Created by senthil on 15/11/17.
 */
import * as types from '../../lib/types'
import {AppStyles} from '../../theme/style'
const toastTypes = AppStyles.toast
import {Toast} from 'native-base';
import {NavigationActions} from 'react-navigation'
import {Session} from '../../lib'


export function itemsHasErrored(bool: boolean) {
    showToast('errror', )
    return {
        type: types.ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}
export function itemsIsLoading(bool: boolean, blockUI: boolean) {
    return {
        type: types.ITEMS_IS_LOADING,
        isLoading: bool,
        blockUI: blockUI
    };
}

export function handleError(type: string, response: Object, dispatch) {
    var message = response ? response : 'No Data Found!';
    if(response && response.status && !response.status.validSession){
        handleExpiredSession(dispatch, response.status)
    } else {
        dispatch(itemsIsLoading(false))
        showToast(type, message)
    }
    return {
        type: types.ITEMS_HAS_ERRORED,
        hasErrored: true
    };
}

function handleExpiredSession(dispatch, statusObj) {
    dispatch(NavigationActions.navigate({routeName: 'Splash'}))
    if(Session.hasSiblings()) {
        var authState = Session.getAuthState();
        dispatch({type: types.SESSION_EXPIRED, authState})
    } else {
        dispatch({type: types.LOGOUT})
    }
    showToast(types.TOAST_ERROR, statusObj.message)
}

export function showToast(type: string, message: string) {
    try {
        const test = type ? toastTypes[type] : toastTypes['error']
        console.log("Type", test);
        console.log("message", message);
        Toast.show({
            text: message ? message : 'No Data Found!',
            buttonText: 'X',
            style: {
                backgroundColor: test,
            },
            position: 'top',
            duration: 2000,
            textStyle: {
                color: '#fff'
            }
        })
    } catch (err) {
        console.log(err);
    }
}

export function handleSuccess(bool: boolean, message: string, dispatch) {
    showToast(types.TOAST_SUCCESS, message)
    return {type: types.SUCCESS, bool};
}

export function handleUpdates(bool: boolean, dispatch) {
    return {type: types.SUCCESS, bool};
}

export function setLoading(bool) {
    return (dispatch, getState) => {
        dispatch({type: types.ITEMS_IS_LOADING,
        isLoading: bool})
    }
}