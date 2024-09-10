import { useContext } from "react";
import { SliderContext } from "./NewFilmsSlider";

const Dot = ({ number }) => {
  const { goToSlide, slideNumber } = useContext(SliderContext);

  return (
    <div
      className={`dot ${
        slideNumber === number ? "bg-red-700" : ""
      } hover:cursor-pointer`}
      onClick={() => goToSlide(number)}
    >
      o
    </div>
  );
};

export default Dot;
