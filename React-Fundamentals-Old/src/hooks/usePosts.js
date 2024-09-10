import {useMemo} from "react";

// Этот хук сортирует посты. Filter везде можно удалить
export const useSortedPosts = (posts, sort) => {
  // Получаем отсортированный список
  // Нам нельзя удалять посты из изначалного списка (изменять его), поэтому делаем так:
  // Используем здесь хук useMemo() чтобы сортировать посты ТОЛЬКО когда меняется их список или метод сортировки (а не при каждом введенном в поиск символе)
  const sortedPosts = useMemo(() => {
    // Чтобы не было ошибки при вызове .localeCompare, мы проверяем - если selectedSort не пустая строка, то возвращаем отсортированный массив
    // Если нет - возвращаем ОБЫЧНЫЙ массив постов
    if(sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts;
  }, [sort, posts])

  return sortedPosts;
}

// Этот хук будет получать отсортированные и отфильтрованные элементы (сортировка + поиск). Filter также везде можно удалить
export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)
  
  // Проверяем есть ли в названии поста введенные пользователем символы
  // toLowerCase() добавляем, чтобы поиск НЕ был чувствителен к регистру
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }, [query, sortedPosts])

  return sortedAndSearchedPosts;
}