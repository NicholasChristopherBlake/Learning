"use client";
import AddExerciseForm from "@/components/workout/AddExerciseForm";
import ExerciseList from "@/components/workout/ExerciseList";
import Calendar from "@/features/Calendar";
import { getInfo } from "@/features/GetInfoFromDb";
import TodayExercises from "@/features/TodayExercises";
import React, { useEffect, useState } from "react";

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

  const [data, setData] = useState([]);
  const [date, setDate] = useState(new Date());

  const fetchData = async () => {
    const data2 = await getInfo();
    setData(data2[0]);
    console.log(data);
  };
  interface element {
    id: number;
    username: string;
    password: string;
  }

  const onClick = (date: Date) => {
    console.log("works. Date is ", date);
    setDate(date);
  };

  return (
    <>
      <div className="text-center mx-auto">
        <h1>Create new program</h1>
        <ExerciseList list={exerciseList} />
        <AddExerciseForm onSubmit={addExercise} />
      </div>
      <div>
        <button onClick={() => fetchData()}>fetch data</button>
        {data && (
          <div>
            {data.map((el: never | element) => (
              <div key={el.id}>
                {el.id}. {el.username} - {el.password}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className=" flex">
        <Calendar onClick={onClick} />
        <TodayExercises date={date} />
      </div>
    </>
  );
}
