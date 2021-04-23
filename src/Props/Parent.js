import React, { Component } from "react";
import Card from "./Card";
import Cards from "./Cards";
import Child from "./Child";
import Student from "./Student";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [
        { id: 1, name: "pppp", age: 22, score: 9 },
        { id: 2, name: "ppp", age: 22, score: 9 },
        { id: 3, name: "pp", age: 22, score: 9 },
      ],
      products: [
        { id: 1, name: "ss", price: 123 },
        { id: 2, name: "ss", price: 123 },
        { id: 3, name: "ss", price: 123 },
      ],
    };
  }
  render() {
    return (
      <div className="container">
        <Child message="Cybersoft" />
        <Child message="FE62" />
        <Child message="Reactjs" />

        {/* Demo vs class */}
        {this.state.students.map((student) => {
          return <Student key={student.id} student={student} />;
        })}

        {/* Demo vs function */}
        <div className="row">
          {this.state.students.map((student) => {
            return (
              <div key={student.id} className="col-sm-4">
                <Card student={student} />
              </div>
            );
          })}
        </div>

        {/* Demo vs props children */}
        <div className="row">
          {this.state.students.map((student) => {
            return (
              <div key={student.id} className="col-sm-4">
                <Cards title="Student"
                footer={() =>(
                    <button className="btn btn-primary">Chi tiết</button>

                )}>
                  <h3 className="text-secondary">{student.name}</h3>
                  <p className="text-success">Score: {student.score}</p>
                </Cards>
              </div>
            );
          })}
        </div>

        <div className="row">
          {this.state.products.map((product) => {
            return (
              <div key={product.id} className="col-sm-4">
                <Cards title="product">
                  <h3 className="text-secondary">{product.name}</h3>
                  <p className="text-success">Score: {product.score}</p>
                  <button className="btn btn-primary">Chi tiết</button>
                </Cards>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
