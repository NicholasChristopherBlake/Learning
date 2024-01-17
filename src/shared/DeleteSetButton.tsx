import React from "react";

function DeleteSetButton({ id, deleteSet }: { id: string; deleteSet: any }) {
  return (
    <button
      onClick={() => deleteSet(id)}
      className=" hover:bg-red-200 bg-red-400 text-black px-2 font-bold rounded mr-2"
    >
      -
    </button>
  );
}

export default DeleteSetButton;
