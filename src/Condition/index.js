import React, { Component } from "react";

export default class ConditionClass extends Component {
  isLogin = false;
  toggleLogin = () => {
    this.isLogin = !this.isLogin;
  };
  render() {
    if (this.isLogin) {
      return <div>
          <p>Đã login</p>
          <button onClick={this.toggleLogin}>Logout</button>
      </div>
    }
    return (
      <div>
        <p>Chưa Login</p>
        <button onClick={this.toggleLogin}>login</button>
      </div>
    );
    // return (

    //     // Sử dụng toán tử bậc 3
    //     // <div>
    //     //     {this.isLogin ? <p>Đã Login</p>:<p>Chưa login</p>}
    //     // </div>
    // )
  }
}

// function ConditionFunction() {
//   let isLogin = false;

//   if (isLogin) {
//     return <p>Đã login</p>;
//   }

//   return <p>Chưa Login</p>;

//   // return (
//   //     <div>
//   //         {this.isLogin ? <p>Đã Login</p>:<p>Chưa login</p>}
//   //     </div>
//   // )
// }
