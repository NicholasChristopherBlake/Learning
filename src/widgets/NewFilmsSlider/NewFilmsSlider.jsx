import React, { useEffect, useState } from "react";
import SlidesList from "./SlidesList";
import Arrows from "./Arrows";
import Dots from "./Dots";
import { createContext } from "react";
import { getNewFilms, getNewFilmsRedux } from "./getNewFilms";
import { getNewFilmInfo, getNewFilmInfoRedux } from "./getNewFilmInfo";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/shared/ui/Loader/Loader";

export const SliderContext = createContext();

const NewFilmsSlider = ({ width, height, autoPlay, autoPlayTime }) => {
  // const [items, setItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState();
  // const [info, setInfo] = useState([]);
  const [touchPosition, setTouchPosition] = useState(null);

  const dispatch = useDispatch();
  const { isLoading, error, films } = useSelector((state) => state.newFilms);
  const { info } = useSelector((state) => state.newFilmInfo);
  // const isLoading = useSelector((state) => state.newFilms.isLoading);
  // const error = useSelector((state) => state.newFilms.error);
  // const films = useSelector((state) => state.newFilms.films);

  useEffect(() => {
    dispatch(getNewFilmsRedux());
  }, []);
  useEffect(() => {
    setCurrentSlide(Math.ceil(films.length / 2) - 1);
  }, [films]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await getNewFilms();
  //     setItems(response);
  //     setCurrentSlide(Math.ceil(response.length / 2) - 1);
  //   };
  //   getData();
  // }, []);

  useEffect(() => {
    dispatch(getNewFilmInfoRedux(films[currentSlide]?.id));
  }, [currentSlide]);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (currentSlide + direction < 0) {
      slideNumber = films.length - 1;
    } else {
      slideNumber = (currentSlide + direction) % films.length;
    }
    setCurrentSlide(slideNumber);
  };

  const goToSlide = (number) => {
    setCurrentSlide(number % films.length);
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
  }, [films.length, currentSlide]);

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
            slidesCount: films.length,
            slideNumber: currentSlide,
            items: films,
            info,
          }}
        >
          {isLoading && <Loader />}
          {error && <h2>{error}</h2>}
          {films && (
            <>
              <SlidesList />
              <Arrows />
              <Dots />
            </>
          )}
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
