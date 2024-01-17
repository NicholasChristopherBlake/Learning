import DeleteSetButton from "@/shared/DeleteSetButton";
import React from "react";

const WarmupSetItem = ({
  data,
  index,
  deleteSet,
}: {
  data: any;
  index: number;
  deleteSet: any;
}) => {
  return (
    <div className=" mb-1">
      <DeleteSetButton deleteSet={deleteSet} id={data.id} />
      {index + 1}. {data.weight} kg x {data.reps} reps
      <span className=" text-sm ml-2">{data.comment}</span>
    </div>
  );
};

export default WarmupSetItem;
