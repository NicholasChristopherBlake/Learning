import React from "react";

function DeleteExerciseButton({
  id,
  deleteExercise,
}: {
  id: string;
  deleteExercise: any;
}) {
  return (
    <button
      onClick={() => deleteExercise(id)}
      className=" hover:bg-red-200 bg-red-400 text-black px-2 font-bold rounded"
    >
      X
    </button>
  );
}

export default DeleteExerciseButton;
