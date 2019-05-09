import * as types from '../../lib/types'
import * as common from '../common'

export function itemsFetchDataSuccess(items: Object) {
  return {
    type: types.ITEMS_FETCH_DATA_SUCCESS,
    items
  };
}
export function itemsFetchData(url: any) {
  return dispatch => {
    dispatch(itemsFetchDataSuccess((url: any)));
    dispatch(common.itemsIsLoading(false));
  };
}
