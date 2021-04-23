import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        const { product} = this.props;

        if (!product) {
            return null
        }
        return (
            <div className="row">
                <div className="col-sm-4">
                    <img width="100%" height="100%"src={product.hinhAnh} alt=""/>
                </div>
                <div className="col-sm-8">
                    <h3>Thông số kỹ thuật</h3>
                    <p>Màn hinh: {product.manHinh}</p>
                    <p>Hệ điều hành: {product.heDieuHanh}</p>
                    <p>Cam trước: {product.cameraTruoc}</p>
                </div>
            </div>
        )
    }
}
