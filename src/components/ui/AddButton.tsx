import React, { FC, PropsWithChildren } from "react";

const AddButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className=" bg-black px-4" type="submit">
      {children}
    </button>
  );
};

export default AddButton;
