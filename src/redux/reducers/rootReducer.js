// reducer tổng quản lý các reducer con
import { combineReducers } from "redux";

// import reducer  con 
import countReducer from "./countReducer"
import colorReducer from "./colorReducer"
import todosReducer from "./todosReducer"
import coursesReducer from "./coursesReducer"
import {BurgerReducer} from "../../Burger/reducers/burgerReducer"

const rootReduce = combineReducers({
    // đây là nơi khai báo các reducer con
    count: countReducer,
    color: colorReducer,
    todos: todosReducer,
    courses: coursesReducer,
    BurgerReducer,
})

export default rootReduce