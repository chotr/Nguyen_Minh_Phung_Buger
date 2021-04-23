import React, { useState, useEffect } from "react";
import DsCuoc from "./DsCuoc";
import XucXac from "./XucXac";

const dsXucXac = [
  { ten: "bau", hinhAnh: "./img/bau.png" },
  { ten: "cua", hinhAnh: "./img/cua.png" },
  { ten: "tom", hinhAnh: "./img/tom.png" },
  { ten: "ca", hinhAnh: "./img/ca.png" },
  { ten: "ga", hinhAnh: "./img/ga.png" },
  { ten: "nai", hinhAnh: "./img/nai.png" },
];
export default function BauCua() {
  const [tienThuong, setTienThuong] = useState(500);
  const [dsCuoc, setDCCuoc] = useState(() => {
    return dsXucXac.map((item) => ({
      ...item,
      diemCuoc: 0,
    }));
  });
  const [xucXac, setXucXac] = useState([
    { ten: "bau", hinhAnh: "./img/bau.png" },
    { ten: "bau", hinhAnh: "./img/bau.png" },
    { ten: "bau", hinhAnh: "./img/bau.png" },
  ]);

  const xuLyDatCuoc = (item, status) => {
    const newdsCuoc = dsCuoc.map((cuoc) => {
      if (cuoc.ten === item.ten) {
        return {
          ...cuoc,
          diemCuoc: status ? cuoc.diemCuoc + 100 : cuoc.diemCuoc - 100,
        };
      }
      return cuoc;
    });
    setDCCuoc(newdsCuoc);
    setTienThuong(status ? tienThuong - 100 : tienThuong + 100);
  };

  const xuLyXucXac = () => {
    const newXucXac = xucXac.map((item) => {
      const random = Math.floor(Math.random() * 6);
      return dsXucXac[random];
    });

    setXucXac(newXucXac);
  };
  //useEffect này sẽ chyaj lại sau khi mảng xucXac thay đổi
  useEffect(() => {
    //tinh điểm

    //lọc ds đặt cược
    const dsDatCuoc = dsCuoc.filter((item) => item.diemCuoc);

    let tongDiem = 0;
    // duyệt qua mảng dsDatCuoc để tar lại tiền cược nếu trúng
    xucXac.forEach((item) => {
      const found = xucXac.find((xucXac) => xucXac.ten === item.ten);
      if (found) {
        tongDiem += item.diemCuoc;
      }
    });
    //Duyệt qua mảng xucXac để tính tiền thắng cược
    xucXac.forEach((item) => {
      const found = dsDatCuoc.find((cuoc) => cuoc.ten === item.ten);
      if (found) {
        tongDiem += found.diemCuoc;
      }
    });
    // reset điểm cược về 0
    const newdsCuoc = dsCuoc.map((item) => ({
      ...item,
      diemCuoc: 0,
    }));
    setTienThuong(tienThuong + tongDiem);
    setDCCuoc(newdsCuoc);
  }, [xucXac]);
  return (
    <div className="bg-secondary baucua-container">
      <div className="w-50 mx-auto">
        <img width="100%" src="./img/LogoBauCua.png" alt="" />
      </div>
      <div className=" w-25 mx-auto">
        <p
          className="bg-warning"
          style={{
            fontSize: "25px",
            borderRadius: "10px",
            textAlign: "center",
            border: "5px solid rbg(0,0,0)",
          }}
        >
          Tiền thưởng:{tienThuong}
        </p>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8">
            <DsCuoc
              tienThuong={tienThuong}
              dsCuoc={dsCuoc}
              xuLyDatCuoc={xuLyDatCuoc}
            />
          </div>
          <div className="col-sm-2">
            <XucXac xucXac={xucXac} xuLyXucXac={xuLyXucXac} />
          </div>
        </div>
      </div>
    </div>
  );
}
