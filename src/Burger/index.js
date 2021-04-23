import React, { Component } from "react";
import { connect } from "react-redux";
import {ADD_BREADMID} from "./actions/burgerAction"
import "./index.css";

class Burger extends Component {
  renderBreadMid = () => {
    let { burger } = this.props;
    // let content = [];
    // for (let propsBurger in burger) {
    //   let breadMid = [];
    //   for (let i = 0; i < burger[propsBurger]; i++) {
    //     breadMid.push(<div key={i} className={propsBurger}></div>);
    //   }
    //   content.push(breadMid);
    // }
    // return content;

    return Object.entries(burger).map(([propsBurger, value], index) => {

      let breadMid = [];
      for (let i = 0; i < value; i++) {
        breadMid.push(<div key={i} className={propsBurger}></div>);
      }

      return breadMid;
    });
  };

  renderMenu = () => {
    let { menu, burger } = this.props;
    return Object.entries(menu).map(([propsMenu, price], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button
              onClick={() => {this.props.addBreadMid(propsMenu, -1)}}
              className="btn btn-danger"
            >
              -
            </button>
            <span className="text mx-4">{burger[propsMenu]}</span>
            <button
              onClick={() => {this.props.addBreadMid(propsMenu, 1)}}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>{price}</td>
          <td>{burger[propsMenu] * price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h3 className="text-center text-success">Burger</h3>
            <div className="breadTop"></div>
            {this.renderBreadMid()}
            <div className="breadBottom"></div>
          </div>
          <div className="col-5">
            <h3 className="text-center text-success">Menu</h3>
            <table className="table">
              <tbody>{this.renderMenu()}</tbody>
              <tfoot>
                <tr>
                  <td>Tổng tiền</td>
                  <td></td>
                  <td></td>
                  <td>{this.props.total}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.BurgerReducer.burger,
    menu: state.BurgerReducer.menu,
    total: state.BurgerReducer.total,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBreadMid: (propsBurger, amount) => {
      const action = {
        type: ADD_BREADMID,
        propsBurger,
        amount,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Burger);
