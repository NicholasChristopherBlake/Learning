import React, { useState } from "react";

const AddWarmupSet = ({ addNewSet }: { addNewSet: any }) => {
  const [setInfo, setSetInfo] = useState({
    weight: "Weight",
    reps: "Reps",
    comment: "Comment",
  });

  return (
    <div>
      <button
        onClick={() => addNewSet(setInfo)}
        className="bg-red-400 text-white hover:bg-red-200 rounded px-2 "
      >
        +
      </button>
      <input
        className=" px-2 placeholder:text-white text-white ml-2"
        type="number"
        placeholder="Weight"
        value={setInfo.weight}
        onChange={(e) => setSetInfo({ ...setInfo, weight: e.target.value })}
      />
      <input
        className=" px-2 placeholder:text-white text-white ml-2"
        type="number"
        placeholder="Reps"
        value={setInfo.reps}
        onChange={(e) => setSetInfo({ ...setInfo, reps: e.target.value })}
      />
      <input
        className=" px-2 placeholder:text-white text-white ml-2"
        type="text"
        placeholder="Comment"
        value={setInfo.comment}
        onChange={(e) => setSetInfo({ ...setInfo, comment: e.target.value })}
      />
    </div>
  );
};

export default AddWarmupSet;
