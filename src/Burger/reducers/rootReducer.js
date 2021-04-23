// reducer tổng quản lý các reducer con
import { combineReducers } from "redux";

// import reducer  con 
import {BurgerReducer} from "./burgerReducer"


const rootReduce = combineReducers({
    // đây là nơi khai báo các reducer con
    BurgerReducer,
})

export default rootReduce