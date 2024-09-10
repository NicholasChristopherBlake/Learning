import CurrentSlide from "./CurrentSlide";
import AsideSlide from "./AsideSlide";
import { SliderContext } from "./NewFilmsSlider";
import { useContext } from "react";

const SlidesList = () => {
  const { slideNumber, items, info } = useContext(SliderContext);

  return (
    <div
      className="flex h-[100%] w-[100%] gap-4"
      style={{
        transform: `translateX(-${slideNumber * 10}%)`,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      {items.map((slide, index) => {
        if (index < slideNumber) {
          return <AsideSlide key={index} data={slide} />;
        } else if (index === slideNumber) {
          return <CurrentSlide key={index} data={slide} info={info} />;
        } else {
          return <AsideSlide key={index} data={slide} />;
        }
      })}
    </div>
  );
};

export default SlidesList;
