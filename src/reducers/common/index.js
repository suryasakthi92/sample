/**
 * Created by senthil on 15/11/17.
 */
import * as types from '../../lib/types'
import createReducer from '../../lib/createReducer'

const initialState = {
    isLoading: false,
    hasErrored: false,
    blockUI: false
};

export const common = createReducer(initialState, {
    [types.ITEMS_HAS_ERRORED](state, action) {
        return { ...state, hasErrored: action.hasErrored };
    },
    [types.ITEMS_IS_LOADING](state, action) {
        return { ...state, isLoading: action.isLoading, blockUI: action.blockUI };
    },
    [types.SUCCESS](state, action) {
        return { ...state, success: action.bool };
    },
});
