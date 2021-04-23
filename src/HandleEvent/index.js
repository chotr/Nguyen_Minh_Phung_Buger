import React, { Component } from 'react'

export default class EventClass extends Component {
    constructor(props) {
        super(props)

        this.showMessage = this.showMessage.bind(this);
    }
    showMessage = () =>{
        // để có thể this ở đây showMessage phải viết theo arrow function
        console.log(this)
        alert("Hello")
    }
    // showMessage({
    //     console.log(this)                                                    
    // })
    // undefined
    // cần bind ở constructor

    showFullName = (name) =>{
        alert(`Hello ${name}`);
    }

    HandleChange = (event) => {
        alert(event.target.value);
    }
    render() {
        return (
            <div>
                <button onClick = {this.showMessage}>Click me</button>
                <button onClick={() => this.showFullName("ppppppp")}>Click me</button>
                <button onClick={this.showFullName.bind(null, "pppppp")}>Click</button>

                <input type="text" onChange={this.HandleChange}/>
                <input type="text" onChange={(event) => this.HandleChange(event)}/>
            </div>
        )
    }
}
