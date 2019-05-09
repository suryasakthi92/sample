import * as types from '../../lib/types'
import createReducer from '../../lib/createReducer'

const initialState = {
  items: []
};

export const homeReducer = createReducer(initialState, {
    [types.ITEMS_FETCH_DATA_SUCCESS](state, action) {
        return { ...state, items: action.items };
    },
});
