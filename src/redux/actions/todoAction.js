// move các action ra 1 file riêng đẻ có thể tái sử dụng và chỉnh sữa
import {
  ADD_TODO,
  DELETE_TODO,
  FILTER_TODO,
  CHANGE_STATUS,
} from "../constants/todoConstant";

export const filterTodo = (status) => {
  return {
    type: FILTER_TODO,
    payload: {
      status,
    },
  };
};
export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id,
    },
  };
};

export const changeStatus = (id) => {
  return {
    type: CHANGE_STATUS,
    payload: {
      id,
    },
  };
};
