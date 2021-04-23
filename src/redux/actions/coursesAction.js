import axios from "axios";
import { useDispatch } from "react-redux";
import {
  GET_COURSES,
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
} from "../constants/coursesConstant";

export const getCourses = () => {
  // xử lý logic gọi API
  return async (dispatch) => {
    dispatch({ type: GET_COURSES_REQUEST });
    try {
      const { data } = await axios({
        method: "GET",
        url:
          "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      });
      dispatch({ type: GET_COURSES_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_COURSES_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
  // return {
  //     type: GET_COURSES,
  //     payload: {data}
  // }
};
