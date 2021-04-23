import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function DemoRedux() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const color = useSelector((state) => state.color);

  const tangBienDem = () => {
    // để tahy đổi state trong store ta cần gọi tới 1 action
    const action = {
      type: "TANG_BIEN_DEM",
    };
    // Đẩy action vào store để thay đổi state sử dụng useDispatch
    // useDispatch()(action)
    dispatch(action);
  };

  const changeColor = (evt) => {
    const action = {
      type: "CHANGE_COLOR",
      payload: evt.target.value,
    };
    dispatch(action);
  };
  return (
    <div>
      <h1>DEMO REDUX</h1>
      <p>count: {count}</p>
      <button onClick={tangBienDem}>Tăng biến đếm</button>

      <p>color: {color}</p>
      <select value={color} onChange={changeColor}>
        <option value="blue">blue</option>
        <option value="green">green</option>
        <option value="black">black</option>
      </select>
    </div>
  );
}
