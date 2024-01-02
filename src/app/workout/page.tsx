"use client";
import AddExerciseForm from "@/components/workout/AddExerciseForm";
import ExerciseList from "@/components/workout/ExerciseList";
import React, { useState } from "react";

interface IExercise {
  exercise: string;
  weight: number;
  sets: number;
  reps: number;
}

export default function Page() {
  const [exerciseList, setExerciseList] = useState<IExercise[]>([]);
  const addExercise = (formData: IExercise) => {
    console.log(formData);
    setExerciseList([...exerciseList, formData]);
    console.log(exerciseList);
  };

  return (
    <div className="text-center mx-auto">
      <h1>Create new program</h1>
      <ExerciseList list={exerciseList} />
      <AddExerciseForm onSubmit={addExercise} />
    </div>
  );
}
