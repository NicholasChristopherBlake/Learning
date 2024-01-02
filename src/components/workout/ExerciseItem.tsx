import React from "react";

const ExerciseItem = ({ item }) => {
  const { exercise, weight, sets, reps } = item;
  return (
    <div className="text-left">
      <p>
        {exercise}
        <strong>{weight}</strong>
        <span>
          {sets} x {reps}
        </span>
      </p>
    </div>
  );
};

export default ExerciseItem;
