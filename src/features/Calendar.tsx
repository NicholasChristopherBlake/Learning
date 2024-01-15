import React, { useState } from "react";
import CalendarLib from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Calendar() {
  type ValuePiece = Date | null;

  type Value = ValuePiece | [ValuePiece, ValuePiece];

  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="max-w-[50%] ">
      <CalendarLib className="text-black" onChange={onChange} value={value} />
    </div>
  );
}
