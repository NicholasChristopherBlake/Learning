import { useContext } from "react";
import { TopSeriesContext } from "./TopSeriesSlider";

const Arrows = () => {
  const { changeSlide } = useContext(TopSeriesContext);

  return (
    <div className="arrows flex text-[30px] justify-between h-[10%] absolute top-[30%] w-[96%] z-1">
      <div
        className="arrow arrow-left h-[30px] w-[30px] hover:cursor-pointer ml-1"
        onClick={() => changeSlide(-1)}
      >
        <svg
          fill="#a6b9d1"
          width="93px"
          height="93px"
          viewBox="-0.64 -0.64 33.28 33.28"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM23.010 14.989h-11.264l3.617-3.617c0.39-0.39 0.39-1.024 0-1.414s-1.024-0.39-1.414 0l-5.907 6.062 5.907 6.063c0.195 0.195 0.451 0.293 0.707 0.293s0.511-0.098 0.707-0.293c0.39-0.39 0.39-1.023 0-1.414l-3.68-3.68h11.327c0.552 0 1-0.448 1-1s-0.448-1-1-1z"></path>{" "}
          </g>
        </svg>
      </div>
      <div
        className="h-[30px] w-[30px] hover:cursor-pointer mr-1"
        onClick={() => changeSlide(1)}
      >
        <svg
          fill="#a6b9d1"
          width="93px"
          height="93px"
          viewBox="-0.64 -0.64 33.28 33.28"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#a6b9d1"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM16.637 9.957c-0.39 0.39-0.39 1.024 0 1.414l3.617 3.617h-11.264c-0.553 0-1 0.448-1 1s0.447 1 1 1h11.327l-3.68 3.68c-0.39 0.39-0.39 1.023 0 1.414 0.195 0.195 0.451 0.293 0.707 0.293s0.512-0.098 0.707-0.293l5.907-6.063-5.907-6.063c-0.391-0.39-1.023-0.39-1.415 0z"></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Arrows;
