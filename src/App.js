// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Content from "./components/Content";
// import Sidebar from "./components/Sidebar";

// import BaiTapReactJS from "./BaiTapReactJS";
// import State from "./Hook/State";

// import BaiTap1 from './BaiTap1'
// import ConditionClass from "./Condition";
// import DataBindingClass from "./DataBinding/DataBindingClass";
// import DataBindingFunction from "./DataBinding/DataBindingFunction";
// import EventClass from './HandleEvent/index'
// import ListsClass from "./Lists";
// import BaiTap2 from "./BaiTap2";
// import Parent from "./Props/Parent";
// import StateClass from "./State/Index";
// import BaiTap3 from "./BaiTap3";
// import LifeCycle from "./LifeCycle";
// import UserManagement from "./UserManagement";
// import LifeCycle from "./Hook/LifeCycle";
// import DemoHook from "./Hook/DemoHook";
// import BauCua from "./BauCua";
// import DemoRedux from "./DemoRedux";
import TodoList from "./TodoListRedux";
import QuanLyKhoaHoc from "./QuanLyKhoaHoc";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import DemoRouter from "./DemoRouter";
import NestedRouter from "./DemoRouter/NestedRouter";
import Burger from "./Burger";

// JSX - javascript XML - kết hợp js vs html lại với nhau
function App() {
  return (
    <BrowserRouter>
      {/* switch: nếu co nhiều path khớp url nó sẽ render ra tất cả componet, nếu chỉ render 1 cpn ta bọc các route vs switch */}
      <Switch>
        {/* path: ss path vs url để quyết định componet có đc hiển thị ra hay không
        exact: thông thường path="/" sẽ khớp vs tất cả url, để khắc phục ta thêm exact */}

        <Route path="/" exact component={DemoRouter} />
        {/* <Route path="/:movieID" exact component={DemoRouter} /> */}

        {/* cách 1 : dùng props component */}
        <Route path="/courses" component={QuanLyKhoaHoc} />
        {/* cách 2: dùng children */}
        {/* <Route path="/baucua">
          <BauCua />
        </Route> */}
        {/* cách 3: dùng props render */}
        <Route
          path="/todolist"
          render={(routerProps) => {
            return <TodoList {...routerProps} />;
          }}
        />

        <Route path="/burger">
          <Burger />
        </Route>

        <Route path="/topic">
          <NestedRouter />
        </Route>

        {/* để page not found cuối cùng */}
        <Route>
          <h3>Page not found</h3>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
