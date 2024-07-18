import React from "react";

const DCard = ({ title, total, icon, style }) => {
  return (
    <div
      className="card"
      style={{
        width: "10rem",
        height: "8rem",
        color: "white",
        marginLeft: ".3rem",
        ...style,
      }}
    >
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <p className="card-text">{total}</p>
        <i className="bi bi-person"></i>
      </div>
    </div>
  );
};

export default DCard;
