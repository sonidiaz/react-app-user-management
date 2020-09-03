
import {FETCH_REQUEST_USERS} from '../actions/usersActions'
import {FETCH_REQUEST_SUCCESS} from '../actions/usersActions'
import {initialUserList} from './initialState';


export default (state = initialUserList, action) => {
  switch (action.type) {
    case FETCH_REQUEST_USERS:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_REQUEST_SUCCESS:
      return {
        ...state,
        listUsers: action.payload.listUsers.data,
        isFetching: false
      }
    case 'DELETE_USER_FROM_LIST':
      return {
        ...state,
        listUsers: action.payload.listUsers,
        isFetching: false
      }
    case 'UPDATE_USER_FROM_LIST':
      return {
        ...state,
        listUsers: action.payload.listUsers,
        isFetching: false
      }
    default:
      return state
  }
}

