import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

export default function DemoRouter(props) {
  // khi component không được cun cấp các props của router nhưng muốn sử dụng
  const history = useHistory();
  const location = useLocation();
  const params = useParams();

  // các props mặc định
  // const {history, location, match} = props;
  // history: cung cấp các hàm dùng để điều hướng routing
  // location: cung cấp pathname là url của component,cung cấp search là giá trị query params
  // query params : ?page=1&sort=asc
  // match: cung cấp params là giá trị động trên url

  const gotoCourses = () => {
    // điều hướng tới trang courses nyungw vẫn giữ lịch sử trang hiện tại
    history.push("/courses");
  };
  const gotoToDoList = () => {
    // điều hướng tới trang todo list nhưng thay thế lịc sử của trang hiện tại
    history.replace("/todolist");
  };
  return (
    <div>
      <button className="btn btn-primary" onClick={gotoCourses}>
        Courses
      </button>
      <button className="btn btn-success" onClick={gotoToDoList}>
        Todo list
      </button>

      <button className="btn btn-danger" onClick={() => history.goBack()}>
        Go back
      </button>
    </div>
  );
}
