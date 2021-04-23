import {
  ADD_TODO,
  DELETE_TODO,
  FILTER_TODO,
  CHANGE_STATUS,
} from "../constants/todoConstant";

const initialState = {
  data: [
    { id: 1, name: "Play game", isCompleted: false },
    { id: 2, name: "Sleep", isCompleted: false },
  ],
  fillter:"all",
  isLoading: false,
};

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_TODO: {
      const { id } = action.payload;

      //   cách 1 dùng slice
      //   const data = [...state.data]; //clone arr data
      //   const index = data.findIndex((item) => item.id === id);
      //   data.slice(index, 1)
      //   return { ...state, data };

      const data = state.data.filter((item) => item.id !== id);
      return { ...state, data };
    }
    case CHANGE_STATUS: {
      const { id } = action.payload;

      // cách 1:
      // const data = [...state.data]
      // const index = data.findIndex(item => item.id === id)
      // data[index].isCompleted = !data[index].isCompleted;
      // return {...state, data};

      // cách 2
      const data = state.data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        }
        return item;
      });
      return { ...state, data };
    }
    case ADD_TODO: {
      const id = Math.floor(Math.random() * 100);
      const todo = { name: action.payload.todo, isCompleted: false, id };
      const data = [...state.data, todo];
      return { ...state, data };
    }
    case FILTER_TODO : {
      const {status} = action.payload;
      return { ...state, filter: status };
    }

    default:
      return state;
  }
}
export default todosReducer;
