import React, { useState } from "react";
import WarmupSetList from "./WarmupSetList";
import AddWarmupSet from "./AddWarmupSet";

const ExerciseSetsContent = ({ visible }: { visible: boolean }) => {
  const [sets, setSets] = useState<any>([]);

  const addNewSet = (newSet: any) => {
    // if (typeof newSet.weight === typeof 5 && typeof newSet.reps === typeof 5) {
    console.log("adding,", newSet);

    const newId: number = Math.random() * 1000;
    const addingSet = { id: newId, ...newSet };
    setSets([...sets, { ...addingSet }]);
    // }
  };

  const deleteSet = (id: number) => {
    setSets(sets.filter((e: any) => e.id !== id));
  };

  return (
    <div className={`ml-6 ${visible ? "visible" : "hidden"}`}>
      <strong>Warm-up sets</strong>
      <hr />
      <WarmupSetList deleteSet={deleteSet} data={sets} />
      <AddWarmupSet addNewSet={addNewSet} />
    </div>
  );
};

export default ExerciseSetsContent;
