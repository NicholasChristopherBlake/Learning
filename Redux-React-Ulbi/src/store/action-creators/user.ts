import axios from "axios"
import { Dispatch } from "redux"
import { UserAction, UserActionTypes } from "../../types/user"

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({type: UserActionTypes.FETCH_USERS})
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setTimeout(() => {
        dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
      }, 500) // чтобы проверить loading
    } catch (e) {
      dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'Error happened during fetching users'})
    }
  }
}