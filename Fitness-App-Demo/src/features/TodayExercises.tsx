import { IProgram } from "@/app/workout/page";
import ExerciseItem from "@/shared/ExerciseItem";
import Loader from "@/shared/Loader";
import React from "react";

const TodayExercises = ({
  date,
  programs,
  isLoading,
  err,
}: {
  date: string;
  programs: IProgram[];
  isLoading: boolean;
  err: string | null;
}) => {
  return (
    <div className="">
      <h2 className=" text-center">{date}</h2>
      <div>
        <h2 className=" text-center">Your Today Exercises</h2>
        {isLoading && <Loader />}
        {err && (
          <div className=" text-center text-xl text-red-400 text-bold py-4">
            {err}
          </div>
        )}
        {programs.map((program) => (
          <div key={program.id}>
            <h2 className=" text-3xl">
              {program.id}. Type: {program.type}
            </h2>
            {program.exercises.map((exercise) => (
              <div key={exercise.id}>
                <h3 className=" text-xl text-red-400">{exercise.name}</h3>
                <div>
                  <strong className=" text-gray-300">Warm-up sets</strong>
                  <hr />
                  {exercise["warmup-sets"].map((setItem) => (
                    <ExerciseItem {...setItem} key={setItem.id} />
                  ))}
                  <strong className=" text-gray-300">Working sets</strong>
                  <hr />
                  {exercise["working-sets"].map((setItem) => (
                    <ExerciseItem {...setItem} key={setItem.id} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodayExercises;
