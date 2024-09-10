import React, { useContext } from "react";
import { TopFilmsContext } from "./TopFilmsSlider";
import Slide from "./Slide";

const SlidesList = () => {
  const { slideNumber, items } = useContext(TopFilmsContext);
  return (
    <div
      className="flex gap-4"
      style={{
        transform: `translateX(-${slideNumber * 40}%)`,
        transition: "transform 0.8s ease-in-out",
      }}
    >
      {items.map((slide, index) => {
        return <Slide data={slide} key={index} />;
      })}
    </div>
  );
};

export default SlidesList;
