import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../redux/actions/coursesAction";

// lấy ds khóa hojc từ api hiển thị rea giaoa diện

export default function QuanLyKhoaHoc() {
  //   const [courses, setCourses] = useState([]);

  const { data, isLoading, error } = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    // async function handleGetCourse() {
    //   const {data} = await axios({
    //     method: "GET",
    //     url:
    //       "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    //   });
    //   dispatch(getCourses(data))
    // }
    // handleGetCourse();
    dispatch(getCourses());
  }, []);

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center"
        style={{ flexDirection: "row", alignItems: "center", height: "100vh"}}
      >
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error || "Something went wrong"}</div>;
  }
  return (
    <div className="container">
      <div className="row">
        {data.map((item) => (
          <div key={item.maKhoaHoc} className="col-sm-4">
            <img src={item.hinhAnh} alt="khoahoc" className="card-img-top" />
            <div className="card-body">
              <h4 className="card-title">{item.tenKhoaHoc}</h4>
              <p className="card-text">{item.moTa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
