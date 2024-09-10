import React from "react";
import SlideImage from "./SlideImage";
import SlideInfo from "./SlideInfo";

const Slide = ({ data }) => {
  return (
    <div
      className=" flex-shrink-0 flex-grow-0 basis-[12%] max-w-[12%] aspect-2/3"
      style={{}}
    >
      <SlideImage
        src={data?.primaryImage?.url}
        alt={data?.titleText.text}
        rating={data?.ratingsSummary.aggregateRating}
      />
      <SlideInfo
        title={data?.titleText.text}
        year={data?.releaseYear.year}
        genre={data?.genres.genres[0].text}
      />
    </div>
  );
};

export default Slide;
