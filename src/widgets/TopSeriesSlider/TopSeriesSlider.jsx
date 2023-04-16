import React, { createContext, useEffect, useState } from "react";
import { getTopSeries } from "./getTopSeries";
import SlidesList from "./SlidesList";
import Arrows from "./Arrows";

export const TopSeriesContext = createContext();

const TopSeriesSlider = () => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await getTopSeries();
      setItems(response);
    };
    getData();
  }, []);

  const changeSlide = (direction = 1) => {
    let slideNumber = 0;

    if (slide + direction < 0) {
      slideNumber = items.length - 1;
    } else {
      slideNumber = (slide + direction) % items.length;
    }
    setSlide(slideNumber);
  };

  console.log("top series Items:", items);

  return (
    <section>
      <div className="flex justify-between px-16">
        <h2>Top Series</h2>
        <ul className="flex gap-8">
          <li>Random</li>
          <li>Popular</li>
          <li>Rating</li>
        </ul>
      </div>
      <div className=" bg-primaryBlue overflow-hidden relative w-[100%]">
        <TopSeriesContext.Provider
          value={{ items, slideNumber: slide, changeSlide }}
        >
          <SlidesList />
          <Arrows />
        </TopSeriesContext.Provider>
      </div>
    </section>
  );
};

export default TopSeriesSlider;
