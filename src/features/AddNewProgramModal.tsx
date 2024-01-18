import React, { useState } from "react";
import ExerciseList from "./ExerciseList";

function AddNewProgramModal({ visible }: { visible: boolean }) {
  const [newProgram, setNewProgram] = useState();
  const [typeValue, setTypeValue] = useState("general");

  const onSubmit = (e: any) => {
    e.preventDefault();
    const id: number = Math.random() * 1000;
    const newProgramData = {
      id: id,
      exercises: [],
    };
  };

  const deleteExercise = (id: number) => {
    setNewData(newData.filter((e: any) => e.id !== id));
  };

  const addExercise = () => {
    if (exerciseValue) {
      const id = Math.random() * 1000;
      const newExercise = { id, name: exerciseValue };
      setNewData([...newData, { ...newExercise }]);
    }
  };

  const [newData, setNewData] = useState<any>([]);
  const [exerciseValue, setExerciseValue] = useState("");

  console.log("newData", newData);

  return (
    <form
      onSubmit={(e) => onSubmit(e)}
      className={`text-black rounded-lg border-solid border-2 bg-slate-100 border-black p-4 m-4 ${
        visible ? "visible" : "hidden"
      }`}
    >
      <h1 className=" text-center">Add New Program</h1>
      <label htmlFor="type">Program Type:</label>
      <select
        className=" ml-2 text-white mb-4"
        name="type"
        id="type"
        value={typeValue}
        onChange={(e) => setTypeValue(e.target.value)}
      >
        <option value="General">General</option>
        <option value="Powerlifting">Powerlifting</option>
        <option value="Stretching">Stretching</option>
        <option value="Cardio">Cardio</option>
      </select>

      <ExerciseList deleteExercise={deleteExercise} data={newData} />
      <div>
        <button
          onClick={addExercise}
          className="bg-red-400 text-white hover:bg-red-200 rounded px-2 mr-2"
        >
          Add Exercise
        </button>

        <input
          value={exerciseValue}
          onChange={(e) => setExerciseValue(e.target.value)}
          type="text"
          list="exercises"
          placeholder="Enter your exercise"
          className=" px-2 placeholder:text-white text-white"
        />
        <datalist id="exercises">
          <option value="Bench Press">Bench Press</option>
          <option value="Pull Up">Pull Up</option>
          <option value="Push Up">Push Up</option>
          <option value="Squat">Squat</option>
        </datalist>
      </div>

      <button
        type="submit"
        className=" bg-red-400 text-white hover:bg-red-200 rounded py-2 px-4 mt-4"
      >
        Create program
      </button>
    </form>
  );
}

export default AddNewProgramModal;
