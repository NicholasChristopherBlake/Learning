import React, { FC } from "react";

interface InputWorkoutProps {
  type: string;
  placeholder: string;
  width?: string;
  name: string;
}

const InputWorkout: FC<InputWorkoutProps> = ({
  type,
  placeholder,
  width,
  name,
}) => {
  return (
    <input
      name={name}
      className={`px-4 py-2 ${width}`}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default InputWorkout;
