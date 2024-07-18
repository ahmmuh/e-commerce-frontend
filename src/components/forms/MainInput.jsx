import React from "react";

const MainInput = ({ type, title, style }) => {
  return (
    <div className="mb-3">
      {title && (
        <label for={title} className="form-label">
          {title}
        </label>
      )}
      <input type={type} style={{ ...style }} className="form-control" />
    </div>
  );
};

export default MainInput;
