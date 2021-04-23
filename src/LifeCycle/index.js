import React, { Component } from "react";
import Child from './Child';

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    console.log("run constructor");
    this.state = {
      count: 0,
    };
  }

  // gọi api
  // setState
  // tương tác với dom
  // setTimeout, setInterval
  // chỉ chạy 1 lần duy nhất sau khi render lần đàu
  componentDidMount() {
    document.getElementById("demo").removeEventListener("click", () => {});

    this.timmer = setTimeout(() => {}, 1000)
    console.log("run componentDidMount");

  }

//   chạy trc khi component bị hủy
// làm những tác vụ dọn dẹp
componentWillUnmount(){
    document.getElementById("demo").removeEventListener("click", () => {})

    clearTimeout(this.timmer);
}
  // khi state, props thay đổi => component render lại =>chạy componentDidUpdte
  // gọi adipisicingtương tác với dom
  // setState
  // có thể lấy được giá trị trc khi thay đổi của props và state
  componentDidUpdate(preProps, preState) {
    console.log("run componentDidUpdate");
    console.log("giá trị trc đó",preState ,preProps);
    console.log("giá trị hiện tại",this.state, this.props);

    // khi setState trong componentdidiUpdate cần phải cài đặt điều kiện dừng dựa vào việc so sánh props hoacej state cũ với props hoặc state mới tránh trường hợp
  }
  increase = () => {
    this.setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  increase1 = () => {
    this.setState((state) => {
      return {
        count1: state.count1 + 1,
      };
    });
  };
  render() {
    console.log("run render");
    return (
      <div>
        lifecycle
        <button onClick={this.increase}>click</button>
         {/* {this.state.count < 5 ? <Child count={this.state.count} /> : null} */}
        <Child count = {this.state.count}/>
      </div>
    );
  }
}
