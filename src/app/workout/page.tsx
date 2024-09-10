"use client";
import AddExerciseForm from "@/components/workout/AddExerciseForm";
import ExerciseList from "@/components/workout/ExerciseList";
import AddNewProgram from "@/features/AddNewProgram";
import Calendar from "@/features/Calendar";
import { getInfo } from "@/features/GetInfoFromDb";
import { getTodayPrograms } from "@/features/GetTodayPrograms";
import TodayExercises from "@/features/TodayExercises";
import React, { useEffect, useState } from "react";

interface IExercise {
  exercise: string;
  weight: number;
  sets: number;
  reps: number;
}
export interface ExerciseContent {
  id: number;
  weight: number;
  reps: number;
  comment: string | null;
}
interface IExerciseDb {
  id: number;
  name: string;
  "warmup-sets": ExerciseContent[];
  "working-sets": ExerciseContent[];
}

export interface IProgram {
  id: number;
  type: string;
  exercises: IExerciseDb[];
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
  const [todayPrograms, setTodayPrograms] = useState<IProgram[]>([]);
  const [isProgramsLoading, setIsProgramsLoading] = useState(false);
  const [programErr, setProgramErr] = useState("");

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
  const getPrograms = async (date: Date) => {
    try {
      setIsProgramsLoading(true);
      const programs = await getTodayPrograms(date.toDateString());
      if (programs[0]) {
        setTodayPrograms(programs[0]["today-programs"]);
        setProgramErr("");
      } else {
        setTodayPrograms([]);
        setProgramErr("No programs found");
      }
    } catch (e) {
      console.log("problem here");
    } finally {
      setIsProgramsLoading(false);
    }
  };

  useEffect(() => {
    getPrograms(date);
  }, [date]);

  const onClick = (date: Date) => {
    setDate(date);
  };

  return (
    <>
      {/* <div className="text-center mx-auto">
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
      </div> */}
      <div className=" flex p-2">
        <Calendar onClick={onClick} />
        <div className=" flex-1 p-4">
          <TodayExercises
            err={programErr}
            isLoading={isProgramsLoading}
            programs={todayPrograms}
            date={date.toDateString()}
          />
          <AddNewProgram />
        </div>
      </div>
    </>
  );
}
