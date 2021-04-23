/* eslint-disable no-duplicate-case */
/* eslint-disable default-case */
import React, { Component } from "react";

export default class BaiTap2 extends Component {
  state = {
    imgUrl: "./img/imgRedCar.jpg",
  };
  ChangeCar = (value) => {
    // switch (value) {
    //   case "Red":
    //     this.setState({ imgUrl: "./img/imgRedCar.jpg" });
    //     break;
    //   case "Silver":
    //     this.setState({ imgUrl: "./img/imgSilverCar.jpg" });
    //     break;
    //   case "Black":
    //     this.setState({ imgUrl: "./img/imgBlackCar.jpg" });
    //     break;
    //   default:
    //     break;
    // }
    const mapping = {
      Red: "./img/imgRedCar.jpg",
      Silver: "./img/imgSilverCar.jpg",
      Black: "./img/imgBlackCar.jpg",
    };
    this.setState({ imgUrl: mapping[value] });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="w-100" src={this.state.imgUrl} alt="abc" />
          </div>
          <div className="col-6">
            <button
              className="btn btn-danger mr-4"
              onClick={() => this.ChangeCar("Red")}
            >
              Red
            </button>
            <button
              className="btn btn-secondary mr-4"
              onClick={() => this.ChangeCar("Silver")}
            >
              Silver
            </button>
            <button
              className="btn btn-dark mr-4"
              onClick={() => this.ChangeCar("Black")}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    );
  }
}
