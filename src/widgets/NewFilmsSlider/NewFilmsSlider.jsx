import React, { useEffect, useState } from "react";
import SlidesList from "./SlidesList";
import Arrows from "./Arrows";
import Dots from "./Dots";
import { createContext } from "react";
import { getNewFilms } from "./getNewFilms";
import { getNewFilmInfo } from "./getNewFilmInfo";
// import NewFilmsContainer from "./newFilmsContainer";

export const SliderContext = createContext();

const NewFilmsSlider = ({ width, height, autoPlay, autoPlayTime }) => {
  const [items, setItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState();
  const [info, setInfo] = useState([]);
  const [touchPosition, setTouchPosition] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await getNewFilms();
      setItems(response);
      setCurrentSlide(Math.ceil(response.length / 2) - 1);
    };
    getData();
  }, []);

  useEffect(() => {
    const getInfo = async () => {
      const response = await getNewFilmInfo(items[currentSlide]?.id);
      setInfo(response);
    };
    getInfo();
  }, [currentSlide]);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (currentSlide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (currentSlide + direction) % items.length;
    }
    setCurrentSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setCurrentSlide(number % items.length);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) return;
    const currentPosition = e.touches[0].clientX;
    const direction = touchPosition - currentPosition;
    if (direction > 10) {
      changeSlide(1);
    }
    if (direction < -10) {
      changeSlide(-1);
    }
    setTouchPosition(null);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      changeSlide(1);
    }, autoPlayTime);
    return () => {
      clearInterval(interval);
    };
  }, [items.length, currentSlide]);

  return (
    <section>
      <h2 className=" text-center">Your weekend buddy for this week</h2>
      <div
        className="overflow-hidden relative"
        style={{ width, height }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <SliderContext.Provider
          value={{
            goToSlide,
            changeSlide,
            slidesCount: items.length,
            slideNumber: currentSlide,
            items,
            info,
          }}
        >
          <SlidesList />
          <Arrows />
          <Dots />
        </SliderContext.Provider>
      </div>
    </section>
  );
};

// type NewFilmsSliderProps = {
//   autoPlay: boolean;
//   autoPlayTime: number;
//   width: string;
//   height: string;
// };

const defaultNewFilmsSlider = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: "100%",
  height: "100%",
};

export default NewFilmsSlider;
