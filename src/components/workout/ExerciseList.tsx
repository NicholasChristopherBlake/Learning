import React from "react";
import ExerciseItem from "./ExerciseItem";

const ExerciseList = ({ list }) => {
  return (
    <div>
      <h2>Your exercises</h2>
      {list.map((item, index) => (
        <ExerciseItem key={index} item={item} />
      ))}
    </div>
  );
};

export default ExerciseList;
