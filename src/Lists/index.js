import React, { Component } from "react";

export default class ListsClass extends Component {
  products = [
    { id: 1, name: "ip", price: 123 },
    { id: 1, name: "ss", price: 123 },
    { id: 1, name: "xm", price: 123 },
  ];
  render() {
    return (
      <div id="demo">
        {/* {this.products.map((item, index) => {
          return (
            //   key không dk trùng
            //   Hạn chế lấy index làm key
            <p key={item.id}>
              {item.id} - {item.name} -{item.price}
            </p>
          );
        })} */}

        {this.products.map((item, index) => {
          <p key={item.id}>
            {item.id} - {item.name} -{item.price}
          </p>;
        })}
      </div>
    );
  }
}
