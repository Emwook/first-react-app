//selectors
export const getSearchKey = (state => state.searchKey);

//actions
const createActionName = actionName => `app/searchKey/${actionName}`
const CHANGE_SEARCH_KEY = createActionName('CHANGE_SEARCH_KEY');

//action creators
export const changeSearchKey = payload => ({ type: CHANGE_SEARCH_KEY, payload });

const searchKeyReducer = (statePart = '', action) => {
    switch(action.type) {
      case CHANGE_SEARCH_KEY:
        return action.payload ;
      default:
        return statePart;
}}

export default searchKeyReducer;