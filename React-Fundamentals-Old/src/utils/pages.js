// Количество страниц
export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit)
}

// Теперь мы перенесли это в хук usePagination
// // Создает array со страницами от 1 до 10
// export const getPagesArray = (totalPages) => {
//   let result = [];
//   for (let i = 0; i < totalPages; i++) {
//     result.push(i + 1)
//   }
//   return result;
// }