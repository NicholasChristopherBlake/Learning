import axios from "axios";
// Возвращает весь список постов
export default class PostService {
  static async getAll(limit = 10, page = 1) { // параметры по умолчанию, лимит 10, страница 1
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        // передаем query-параметры с помощью функции axios
        params: {
          _limit: limit,
          _page: page
        }
      });
      return response; 
  }

  static async getById(id) { // запрос поста по id
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
    return response; 
  }

  static async getCommentsByPostId(id) { // запрос комментариев к посту по id поста
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
    return response; 
  }
}