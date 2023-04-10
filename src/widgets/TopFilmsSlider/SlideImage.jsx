import Image from "next/image";
import React from "react";
import SlideRating from "./SlideRating";

const SlideImage = ({ src, alt, rating }) => {
  return (
    <div>
      <Image src={src} alt={alt} width={200} height={300} />
      <SlideRating rating={rating} />
    </div>
  );
};

export default SlideImage;
