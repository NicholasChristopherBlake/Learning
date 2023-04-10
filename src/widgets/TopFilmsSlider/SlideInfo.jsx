import React from "react";

const SlideInfo = ({ title, year, genre }) => {
  return (
    <div>
      <h3>
        {year} / {genre}
      </h3>
      <h2>{title}</h2>
    </div>
  );
};

export default SlideInfo;
