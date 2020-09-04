import { combineReducers } from 'redux';
import contacts from './contactReducer';
import apiCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  contacts,
  apiCallsInProgress
});

export default rootReducer;
