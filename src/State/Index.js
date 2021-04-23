import React, { Component } from 'react'

export default class StateClass extends Component {
    state = {
        // demo 1
        isLogin: false,

        // demo 2
        count: 0,
        doubleCount: 0,
    };
    toggleLogin = () => {
        // không dk state trực tiếp
        // this.state.isLogin = !this.state.isLogin;

        // thay đổi state thông qua hàm state
        this.setState({
            isLogin: !this.state.isLogin,
        },
        // sau khi setState thahf công sẽ nhảy vào trong callback này
        () => {
            console.log(this.state.isLogin); 
            // giá trị mới của state
        }
        )
        // không thể lấy kết quả mới sau khi setState ngay đây, vì setstate là 1 hàm bất đồng bộ
        console.log(this.state.isLogin); 
        
    }
    handleIncrement = () => {
        // Cách 1: dùng tham số  thứ 2 để nhận gtri state mới nhất
        // this.setState({ 
        //     count: this.state.count + 1, 
        // },
        // () => {
        //     this.setState({ 
        //         doubleCount: this.state.count*2, 
        //     })
        // });

        // cách 2:
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        })
        this.setState((state) => {
            return {
                doubleCount: state.count*2,
            }
        })
    }
    render() {
        // if (this.state.isLogin) {
        //   return <div>
        //       <p>Đã login</p>
        //       <button onClick={this.toggleLogin}>Logout</button>
        //   </div>
        // }
        // return (
        //   <div>
        //     <p>Chưa Login</p>
        //     <button onClick={this.toggleLogin}>login</button>
        //   </div>
        // );

        // demo 2
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <p>DoubleCount: {this.state.doubleCount}</p>

                <button onClick={this.handleIncrement}>Click</button>
            </div>
        )
      }
}
