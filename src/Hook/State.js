import React, { useState } from "react";

// Hàm tạo state trong function component
export default function State() {
  //[gtri state, hàm thay dổi gtri state] = useState(gtri khởi tạo)
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const HandleChangeColor = (color) => {
    const colors = ["red", "green", "blue", "yellow"];
    const Random = Math.floor(Math.random() * 3);
    setColor(colors[Random])
  };

  const [products, setProducts]= useState(["ip12", "ss abc"]);
  const handleAddProduct = () => {
    //c1: chép mảng pro và thêm phần tử vào
    //const newProducts =[...products, "hvhjvjh"]
    // setProducts(newProducts);

    //c2
      setProducts(state => {
          return [...state,"xm mi abc"]
      });
  }

  const handleChange = (evt) => {
      const { name, value } = evt.target;
      setForm(form => {
          return {
              ...form,
              [name]: value,
          }
      })
  }

  const [form, setForm] = useState({userame:"", email:""})
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>click</button>

      <h3>demo product</h3>
      <p>{products.join(",")}</p>
      <button onClick={handleAddProduct}>Add pro</button>

      <h3>demo form</h3>
      <div className="form-group">
          <label>Username</label>
          <input type="text" name="username" value={form.username} className="form-control" onChange={handleChange}/>
      </div>
      <div className="form-group">
          <label>Email</label>
          <input type="text" name="email" value={form.email} className="form-control" onChange={handleChange}/>
      </div>
    </div>
  );
}
