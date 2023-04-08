import { useContext } from "react";
import Dot from "./Dot";
import { SliderContext } from "./NewFilmsSlider";

const Dots = () => {
  const { slidesCount } = useContext(SliderContext);

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }
    return dots;
  };
  return <div className="dots flex justify-center gap-2">{renderDots()}</div>;
};

export default Dots;
