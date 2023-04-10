import React, { useContext } from "react";
import { TopFilmsContext } from "./TopFilmsSlider";
import Slide from "./Slide";

const SlidesList = () => {
  const { items } = useContext(TopFilmsContext);
  return (
    <div className="flex gap-4">
      {items.map((slide, index) => {
        return <Slide data={slide} key={index} />;
      })}
    </div>
  );
};

export default SlidesList;
