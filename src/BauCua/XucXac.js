import React from "react";

export default function XucXac({xucXac, xuLyXucXac}) {
  return (
    <div className="p-5">
      {xucXac.map((item) => (
        <img width="80px" height="80px" src={item.hinhAnh} alt="" />
      ))}
      <img
        className="mt-5"
        width="100%"
        src="./img/soc.png"
        onClick={xuLyXucXac}
        alt=""
      />
    </div>
  );
}
