import React, { Component } from 'react'
// Dữ  liệu component cha truyền xuống sẽ được nằm trong obj rgis.props
// Props là read-only, chỉ dungfdder render ra giao diện không được  thya đổi nó
// Props thay dổ component render sẽ render lại

export default class Child extends Component {
    
    
    render() {
        console.log(this.props)
        return (
            <p>
                Message: {this.props.message}
            </p>
        )
    }
}
