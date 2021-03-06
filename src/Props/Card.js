import React from 'react'

export default function Card(ppp) {
    const {student} = ppp
    return (
      <div className="card">
        <div className="card-header">Sinh viên</div>
        <div className="card-body">
          <h4 className="card-title">Name: {student.name}</h4>
          <p className="card-text">Age: {student.age}</p>
        </div>
        <div className="card-footer text-muted">
            <button className="btn btn-success">Chi tiết</button>
        </div>
      </div>
    );
}
