import React from "react";

const Search = ({ setShowSearchModal }) => {
  return (
    <div className=" text-white z-10 flex bg-black gap-4">
      <label htmlFor="">
        <svg
          fill="#b4b9c0"
          width="30px"
          height="30px"
          viewBox="0 0 16 16"
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
            <path
              d="M12.027 9.92L16 13.95 14 16l-4.075-3.976A6.465 6.465 0 0 1 6.5 13C2.91 13 0 10.083 0 6.5 0 2.91 2.917 0 6.5 0 10.09 0 13 2.917 13 6.5a6.463 6.463 0 0 1-.973 3.42zM1.997 6.452c0 2.48 2.014 4.5 4.5 4.5 2.48 0 4.5-2.015 4.5-4.5 0-2.48-2.015-4.5-4.5-4.5-2.48 0-4.5 2.014-4.5 4.5z"
              fillRule="evenodd"
            ></path>{" "}
          </g>
        </svg>
      </label>
      <input
        type="text"
        placeholder="Enter movie name..."
        className="px-2 text-black max-w-[100%] min-w-[400px] "
      />
      <button className="px-3" onClick={() => setShowSearchModal(false)}>
        X
      </button>
    </div>
  );
};

export default Search;
