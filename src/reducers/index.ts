import { combineReducers } from 'redux';


export const reducers = combineReducers({
  //silly dummy reducer - if we dont have one redux will throw an error
  counter: () => 1
});