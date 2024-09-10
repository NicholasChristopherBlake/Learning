import React from "react";

const WarmupSet = () => {
  return (
    <div className=" ml-6">
      <p>Warmup Sets</p>
      <hr />
      <button className="bg-red-400 text-white hover:bg-red-200 rounded px-2">
        +
      </button>
      <input
        className=" px-2 placeholder:text-white text-white ml-2"
        type="number"
        placeholder="Weight"
      />
      <input
        className=" px-2 placeholder:text-white text-white ml-2"
        type="number"
        placeholder="Reps"
      />
      <input
        className=" px-2 placeholder:text-white text-white ml-2"
        type="text"
        placeholder="Comment"
      />
    </div>
  );
};

export default WarmupSet;
