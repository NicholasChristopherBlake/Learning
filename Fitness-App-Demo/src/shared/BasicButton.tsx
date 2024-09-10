import React from "react";

function BasicButton({
  children,
  onClick,
}: {
  children: string;
  onClick?: any;
}) {
  return (
    <button
      onClick={onClick}
      className=" text-white text-bold px-3 py-2 text-xl bg-red-400 rounded hover:bg-red-200 "
    >
      {children}
    </button>
  );
}

export default BasicButton;
