import { useMemo } from "react";

export const usePagination = (totalPages) => {
  return useMemo(() => {
    let pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    return pagesArray;
  }, [totalPages]);
};
