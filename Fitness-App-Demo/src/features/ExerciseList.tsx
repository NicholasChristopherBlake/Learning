import React from "react";
import ExerciseItem from "./ExerciseItem";

function ExerciseList({
  data,
  deleteExercise,
}: {
  data: any;
  deleteExercise: any;
}) {
  console.log("data,", data);
  return (
    <div className=" pb-2">
      {data.map((exercise: { id: string; name: string }, index: number) => (
        <ExerciseItem
          id={exercise.id}
          deleteExercise={deleteExercise}
          key={exercise.id}
          name={exercise.name}
        />
      ))}
    </div>
  );
}

export default ExerciseList;
