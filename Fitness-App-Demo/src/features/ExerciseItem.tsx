import DeleteExerciseButton from "@/shared/DeleteExerciseButton";
import React, { useState } from "react";
import ExerciseSetsContent from "./ExerciseSetsContent";

const ExerciseItem = ({
  id,
  name,
  deleteExercise,
}: {
  id: string;
  name: string;
  deleteExercise: any;
}) => {
  const [showContent, setShowContent] = useState(false);

  const changeVisibility = () => {
    setShowContent((prev) => !prev);
  };
  return (
    <div className=" mb-2">
      <div
        onClick={() => changeVisibility()}
        className=" hover:cursor-pointer border-2 rounded px-2 flex justify-between"
      >
        <span>{name}</span>
        <DeleteExerciseButton id={id} deleteExercise={deleteExercise} />
      </div>
      <ExerciseSetsContent visible={showContent} />
    </div>
  );
};

export default ExerciseItem;
