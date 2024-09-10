import React, { FormEvent } from "react";
import InputWorkout from "../ui/InputWorkout";
import AddButton from "../ui/AddButton";

const AddExerciseForm = ({ onSubmit }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    onSubmit(formProps);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      action=""
      className="flex gap-2 px-2 justify-between max-w-full"
    >
      <InputWorkout name="exercise" type="text" placeholder="Enter exercise" />
      <InputWorkout
        name="weight"
        width="w-[10ch]"
        type="number"
        placeholder="Weight"
      />
      <InputWorkout
        name="sets"
        width="w-[10ch]"
        type="number"
        placeholder="Sets"
      />
      <InputWorkout
        name="reps"
        width="w-[10ch]"
        type="number"
        placeholder="Reps"
      />
      <AddButton>Add</AddButton>
    </form>
  );
};

export default AddExerciseForm;
