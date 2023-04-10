import React, { createContext, useEffect, useState } from "react";
import { getTopFilms } from "./getTopFilms";
import SlidesList from "./SlidesList";
import Arrows from "./Arrows";

export const TopFilmsContext = createContext();

const TopFilmsSlider = () => {
  const [items, setItems] = useState([]);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const response = await getTopFilms();
      setItems(response);
    };
    getData();
  }, []);

  console.log("top films Items:", items);

  return (
    <section>
      <div className="flex justify-between px-16">
        <h2>Top Movies</h2>
        <ul className="flex gap-8">
          <li>Random</li>
          <li>Popular</li>
          <li>Rating</li>
        </ul>
      </div>
      <div className=" bg-primaryBlue overflow-hidden relative w-[100%]">
        <TopFilmsContext.Provider value={{ items }}>
          <SlidesList />
          <Arrows />
        </TopFilmsContext.Provider>
      </div>
    </section>
  );
};

export default TopFilmsSlider;
