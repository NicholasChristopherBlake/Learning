import InputWorkout from "@/components/ui/input-workout";
import React from "react";

export default function Page() {
  return (
    <div className="text-center mx-auto">
      <h1>Create new program</h1>
      <div>
        <h2>Your exercises</h2>
      </div>
      <form action="" className="flex flex-shrink gap-2 flex-wrap ">
        <InputWorkout type="text" placeholder="Enter exercise" />
        <InputWorkout type="number" placeholder="Weight" />
        <InputWorkout type="number" placeholder="Sets" />
        <InputWorkout type="number" placeholder="Reps" />
        <input type="text" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
