import React from "react";

function ChartCard({ title, total, icon }) {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">{title}</h6>
        <strong>{total}</strong>
        <i className="bi bi-cart-fill"></i>
        <p>{icon}</p>
      </div>
    </div>
  );
}

export default ChartCard;
