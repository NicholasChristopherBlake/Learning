import { useState } from "react"

export const useFetching = (callback) => {
  // Обработка ошибки и индикатора загрузки
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetching = async (...args) => {
    try {
      setIsLoading(true);
      await callback(...args)
    } catch (e) {
      setError(e.message) // помещаем сообщение об ошибке
    } finally {
      setIsLoading(false) // Независимо от наличия ошибки убираем крутилку
    }
  }
  // возвращаем из хука функцию fetching (чтобы ее вызывать), состояние isLoading и ошибку
  // т.е. массив из 3 элементов
  return [fetching, isLoading, error]
}