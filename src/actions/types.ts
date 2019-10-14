import { FetchTodosAction, DeleteTodoAction } from './todos';

export enum ActionTypes {
  fetchTodos,
  deleteTodo
}

//type alias of Action
export type Action = FetchTodosAction | DeleteTodoAction;