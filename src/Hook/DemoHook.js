import React, { useEffect } from "react";
import useForm from "./useForm";
import useWindowResize from "./useWindowResize";

// tạo custom hook

export default function DemoHook() {
  // const {size, setSize} = useEffect({width:0, height:0})

  // useEffect(() => {
  //     window.addEventListener("resize", handleResize);
  // },[]);

  // const handleResize = () => {
  //     const {innerWidth, innerHeight} = window;
  //     console.log(innerWidth, innerHeight);
  //     setSize({
  //         width: innerWidth,
  //         height: innerHeight
  //     })
  // }
  const { width, height } = useWindowResize();

  const { values, errors, handleChange, handleBlur } = useForm({
    username: "",
  });
  return (
    <div>
      {/* {width > 500 ? (<p>width lớn hơn 500</p>) : (<p>width bé hơn 500</p>)} */}

      <div className="form-group">
        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          className="form-control"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.username ? (
          <div className="alert alert-danger">{errors.username}</div>
        ) : null}
      </div>
    </div>
  );
}
