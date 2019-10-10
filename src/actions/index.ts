import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {

  return async (dispatch: Dispatch) => {
    //inside of response.data we will have an array of objects that satisfies the Todo interface
    const response = await axios.get<Todo[]>(url);

    dispatch({
      type: ActionTypes.fetchTodos,
      payload: response.data
    });
  };
};