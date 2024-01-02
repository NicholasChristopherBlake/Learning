import React, { FC } from "react";

interface InputWorkoutProps {
  type: string;
  placeholder: string;
}

const InputWorkout: FC<InputWorkoutProps> = ({ type, placeholder }) => {
  return (
    <input className=" px-4 py-2 w-fit" type={type} placeholder={placeholder} />
  );
};

export default InputWorkout;
