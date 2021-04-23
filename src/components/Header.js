// tạo nhanh class component: rcc
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="bg-primary" style={{height: "50px"}}>
                <h1>Header</h1>
            </div>
        )
    }
}
