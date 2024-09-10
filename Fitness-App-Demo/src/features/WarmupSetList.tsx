import React from "react";
import WarmupSetItem from "./WarmupSetItem";

const WarmupSetList = ({ data, deleteSet }: { data: any; deleteSet: any }) => {
  return (
    <div>
      {data.map((el: any, index: number) => (
        <WarmupSetItem
          deleteSet={deleteSet}
          index={index}
          key={el.id}
          data={el}
        />
      ))}
    </div>
  );
};

export default WarmupSetList;
