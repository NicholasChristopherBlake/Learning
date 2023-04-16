import Image from "next/image";
import React from "react";
import SlideRating from "./SlideRating";

const SlideImage = ({ src, alt, rating }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={300}
        height={300}
        style={{ maxHeight: "300px" }}
      />
      <SlideRating rating={rating} />
    </div>
  );
};

export default SlideImage;
