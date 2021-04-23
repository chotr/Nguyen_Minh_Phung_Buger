import {
  GET_COURSES,
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
} from "../constants/coursesConstant";

const initialState = {
  data: [],
  isLoading: false, //dùng để control UI khi data đang được fetch
  error: "", //dùng để hiển thị lỗi nếu có
};

function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSES_REQUEST: {
      return { ...state, isLoading: true, error: "" };
    }
    case GET_COURSES_SUCCESS: {
      return { ...state, isLoading: false, data: action.payload.data };
    }
    case GET_COURSES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }
    default:
      return state;
  }
}

export default coursesReducer;
