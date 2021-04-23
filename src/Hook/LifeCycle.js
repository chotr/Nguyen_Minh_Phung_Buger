import React, { useState, useEffect } from "react";

export default function LifeCycle() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  //tg dg componentDidMount + componentDidUpdate
  //chạy mỗi lần sau khi render
  useEffect(() => {
    console.log("Count", count);
  });

  //tg dg componentDidMount
  //chỉ chạy 1 lần sau khi render
  // Chú ý tham số thứ 2 là 1 array rỗng
  useEffect(() => {
    console.log("chạy 1 lần sau khi render");

    //khi use effect có return về 1 function, function này chạy trc khi component bị hủy,
    //tg dh componentWillUnmount

    //chỉ nên return useEffect có tam số thứ 2 là 1 arr rỗng
    return () => {
      console.log("chayk trc khi componentbị hủy");
    };
  }, []);
  //tg dg componentDidMount + componentDidUpdate
  //nhưng chỉ chạy lại sau khi render với điều kiện  gtri biến count thay đổi
  useEffect(() => {
    console.log("Giá trị count thay đổi: ", count);
  }, [count]);


  return (
    <div>
      <h3>demo count</h3>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>

      <h3>demo count1</h3>
      <p>Count1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>click</button>
    </div>
  );
}
