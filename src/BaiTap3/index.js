import React, { Component } from "react";
import ProductCart from "./ProductCart";
import ProductList from "./ProductList";

export default class BaiTap3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          maSP: 1,
          tenSP: "VV850",
          manHinh: 'AMOLED, 6.2", Full HD+',
          heDieuHanh: "Android 9.0 (Pie)",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 5700000,
          hinhAnh: "./img/sp_vivo850.png",
        },

        {
          maSP: 2,
          tenSP: "SS Note7",
          manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
          heDieuHanh: "Android 9.0 (Pie); Flyme",
          cameraTruoc: "20 MP",
          cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 7600000,
          hinhAnh: "./img/sp_note7.png",
        },

        {
          maSP: 3,
          tenSP: "Iphone XS Max",
          manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
          heDieuHanh: "iOS 12",
          cameraSau: "Chính 12 MP & Phụ 12 MP",
          cameraTruoc: "7 MP",
          ram: "4 GB",
          rom: "64 GB",
          giaBan: 27000000,
          hinhAnh: "./img/sp_iphoneX.png",
        },
      ],
      carts: [],
    };
  }

  addToCart = (product) => {
    console.log(product);
    // this.state.carts.push(product);
    // khi setstate vs arr hoặc obj ta cần truyền vào 1 arr hoặc obj mới(khác địa chỉ vùng nhớ)

    // kiểm tra sản phẩn đã tồn tại trong giỏ hngf hay chưa
    const index = this.state.carts.findIndex((item) => item.maSP === product.maSP);

    if (index === -1) {
      // thêm mới
      const carts = [...this.state.carts, {...product, soLuong:1}];
      this.setState({carts})
    }else {
      // đã tồn tại, cập nhật số lượng
      // const carts = this.state.carts.map((item, idx) => {
      //   if (index === idx) {
      //     return {...item, soLuong: item.soLuong + 1}
      //   }
      //   return item;
      // });

      // this.setState({carts});

      const carts = [...this.state.carts];
      carts[index].soLuong += 1;

      this.setState({carts});
    }

    // const carts = [...this.state.carts.product];
    // this.setState({carts: this.state.carts});
  };

  componentDidMount() {
    const carts = localStorage.getItem("carts");
    if (carts) {
      this.setState({ carts: JSON.parse(carts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // kiểm tra xem state giỏ hàng có thay đổi hay không 
    // so sánh địa chỉ vùng mhows
    if (this.state.carts !== prevState.carts) {
      localStorage.setItem("carts", JSON.stringify(this.state.carts));
    }
  }

  render() {
    return (
      <div className="container">
        <div className="text-right mb-4">
          <button data-toggle="modal" data-target="#exampleModal" className="btn btn-success">Giỏ hàng</button>
        </div>
        <ProductList
          products={this.state.products}
          addToCart={this.addToCart}
        />
        <ProductCart carts={this.state.carts}/>
      </div>
    );
  }
}
