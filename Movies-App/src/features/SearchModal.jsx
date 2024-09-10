import React from "react";
import Search from "@/shared/ui/Search/Search";

const SearchModal = ({ showSearchModal, setShowSearchModal }) => {
  return (
    <div
      className={`${
        showSearchModal ? `flex` : "hidden"
      } absolute top-[60px] left-[37%]`}
    >
      <Search
        setShowSearchModal={setShowSearchModal}
        showSearchModal={showSearchModal}
      />
    </div>
  );
};

export default SearchModal;
