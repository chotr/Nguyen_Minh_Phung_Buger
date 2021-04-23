import React, { Component, PureComponent } from "react";

// PureComponent: react sẽ tự xử lý shouldComponentUpdate, nó sẽ tự động so 
// sánh props hoặc state vs props và state mới, nếu thay đổi sẽ render lại, còn không thif sẽ render lại

// chỉ so sánh được primitives value(tring, number, boolean, null, undefined), khi so sánh obj hoặc arr nó sẽ luôn trả về true
export default class Child extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      total: props.count * 1000,
    };
  }
  // chayj sau khi props hoawcj state thay đổi, và chạy trước render
  // nếu return về true => chyaj tiếp tực vs render
  // nếu return về false => render sẽ không dk chạy
  // cung cấp gtri mới của props và state
  shouldComponentUpdate(nextProps, nextState) {
    //   chỉ khi nào props count thay đổi component mới được render lại
    if (nextProps.count !== this.props.count) {
      return false;
    }
    return true;
  }

  //   trg hợp state của cpmponent con phụ thuộc vào props của component cha
  componentDidUpdate(prevProps, prevState) {
    console.log(prevProps);
    console.log(this.props);
    if (prevProps.count !== this.props.count) {
      this.setState({ total: this.props.count * 1000 });
    }
  }

  componentWillUnmount() {
    console.log("Run componentWillUnmount")
  }

  render() {
    return (
      <div>
        <p>Total: {this.state.total}</p>
      </div>
    );
  }
}
