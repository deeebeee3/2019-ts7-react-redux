import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from '../actions';

export interface StoreState {
  todos: Todo[]; //an array of Todos
}


export const reducers = combineReducers<StoreState>({
  //silly dummy reducer - if we dont have one redux will throw an error
  //counter: () => 1
  todos: todosReducer
});


//Our store state is going to look like this:
// {
//   todos: [Todo, Todo, Todo]
// }