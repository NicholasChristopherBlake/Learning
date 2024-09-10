import {useMemo} from "react";
// хук для пагинации - заполнения количества страниц через useMemo

export const usePagination = (totalPages) => {
  const getResult = useMemo(() => {
    let result = [];
    for (let i = 0; i < totalPages; i++) {
      result.push(i + 1)
    }
    return result;
  }, [totalPages])
  return getResult
}