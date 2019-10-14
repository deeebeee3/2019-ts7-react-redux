import { Todo, Action, ActionTypes } from '../actions'

//state is going to be an array of Todos, if we don't provide a state then use an empty array
export const todosReducer = (
  state: Todo[] = [],
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
};