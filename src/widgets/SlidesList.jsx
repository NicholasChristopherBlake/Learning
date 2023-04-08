import Slide from "./Slide";
import { SliderContext } from "./NewFilmsSlider";
import { useContext } from "react";

const SlidesList = () => {
  const { slideNumber, items } = useContext(SliderContext);

  return (
    <div
      className="slide-list flex h-[100%] w-[100%]"
      style={{
        transform: `translateX(-${slideNumber * 100}%)`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      {items.map((slide, index) => {
        console.log("SlideNumber", slideNumber);
        return <Slide key={index} data={slide} />;
      })}
    </div>
  );
};

export default SlidesList;
