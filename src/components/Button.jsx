import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
