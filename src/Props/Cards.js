import React, { Component } from "react";

// Mặc định tất cả components đều có 1 props tên là Children
export default class Cards extends Component {
  render() {
      const {title, footer} = this.props;
    return (
      <div className="card">
        <div className="card-header">{title}</div>
        <div className="card-body">{this.props.children}</div>
        <div className="card-footer text-muted">{footer && footer()}</div>
      </div>
    );
  }
}
