import React from "react";

export default function DsCuoc({ tienThuong, dsCuoc, xuLyDatCuoc }) {
    const thayDoiCuoc = (item, status) => {
        //status: true/false <=> (tăng/giảm)
        xuLyDatCuoc(item, status);
    }
  return (
    <div className="container">
      <div className="row">
        {dsCuoc.map((item) => (
          <div key={item.ten} className="col-sm-4 mb-4">
            <img className="w-100" src={item.hinhAnh} alt="xucSac" />
            <div className="mt-4 bg-warning text-center p-2">
              <span className="mr-2">Cược:</span>
              <button
                className="btn btn-success"
                disabled={!item.diemCuoc}
                // onClick={giamCuoc}
                onClick={() => thayDoiCuoc(item, false)}
              >
                -
              </button>
              <span className="text-success mx-2">{item.diemCuoc}</span>
              <button
                className="btn btn-success"
                disabled={!tienThuong}
                // onClick={tangCuoc}
                onClick={() => thayDoiCuoc(item, true)}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
