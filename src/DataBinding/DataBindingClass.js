import React, { Component } from 'react'

export default class DataBindingClass extends Component {
    content = "Hello abc"
    xuatThongTin = (name, age) => {
        return (
            <div>
                <p>{name}</p>
                <p>{age}</p>
            </div>
        )
    }
    render() {
        let a = "Hello";
        let b = "World";
        return (
            <div>
                <p>{a}</p>
                <p>{b}</p>
                <p>{this.content}</p>

                {this.xuatThongTin('pppp', 22)}
            </div>
        )
    }
}

