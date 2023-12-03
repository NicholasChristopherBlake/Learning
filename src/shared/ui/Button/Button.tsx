import React from "react";

const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <button className="style text-rgb(233, 95, 110) bg-white">
      {children}
    </button>
  );
}

export default Button;
