import React from "react";

const SlideInfo = ({ info }) => {
  {
    console.log("BasicSlideinfo", info[4]);
    if (info[4] !== undefined) {
      console.log(info[4][info[4].length - 1]);
    }
  }
  return (
    <div className="bg-white text-black">
      {info[4] !== undefined ? (
        <h2 className=" text-xl">{info[4][info[4].length - 1]?.title}</h2>
      ) : (
        <h2>Title Loading</h2>
      )}
      <p>Release date: </p>
      <strong>
        {info[0]?.releaseDate?.day}.{info[0]?.releaseDate?.month}.
        {info[0]?.releaseDate?.year}
      </strong>
      <p>Genre</p>
      <strong>
        {info[0]?.genres.genres.map((genre, index) => (
          <span key={index}>{genre.text} </span>
        ))}
      </strong>
      <p>Directed by</p>
      <p>...</p>
      <p>Synopsis</p>
      <p className=" max-w-[40ch]">{info[0]?.plot.plotText.plainText}</p>
      <p>Starring</p>
      <p className=" max-w-[40ch]">
        {info[1]?.principalCast[0].credits.map((actor, index) => (
          <span key={index}>{actor?.name.nameText.text}, </span>
        ))}
      </p>
      <p>+6 see more (actors)</p>
      <button>See More</button>
      <h3>Rating by IMDb</h3>
      <h3>Rating by Metacritic</h3>
      <h3>Rating by users</h3>
      <button>Give a Review</button>
    </div>
  );
};

export default SlideInfo;
