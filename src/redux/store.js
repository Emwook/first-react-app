import { createStore } from 'redux';
import initialState from './initialState';
import shortid from 'shortid';
import { strContains } from '../utils/strContains';

//selectors
export const getFilteredCards = ({ cards, search }, columnId) => 
  cards.filter(card => card.columnId === columnId && strContains(card.title, search.searchKey));

// action creators
export const addColumn = payload => ({ type: 'ADD_COLUMN', payload });
export const addCard = payload => ({ type: 'ADD_CARD', payload });
export const changeSearchKey = payload => ({ type: 'CHANGE_SEARCH_KEY', payload });

//getters
export const getAllColumns = (state => state.columns);
export const getSearchKey = (state => state.search.searchKey);


const reducer = (state, action) => {
  switch(action.type){
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, {...action.payload, id: shortid()}]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, {...action.payload, id: shortid()}]};
    case 'CHANGE_SEARCH_KEY':
      return { ...state, search: action.payload};
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;