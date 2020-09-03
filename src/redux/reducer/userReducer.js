
import {FETCH_REQUEST_USER} from '../actions/userActions'
import {FETCH_REQUEST_SUCCESS_USER} from '../actions/userActions'
import {initialUserLogin} from './initialState';


export default (state = initialUserLogin, action) => {
  switch (action.type) {
    case FETCH_REQUEST_USER:
      return {
        ...state,
        isFetching: true
      }
    case FETCH_REQUEST_SUCCESS_USER:
      return {
        info: action.payload.userInfo,
        isAuth: true,
        isFetching: false
      }
    case 'USER_SIGN_OUT':
      return {
        ...state,
        info:{},
        isAuth: false
      }  
    default:
      return state
  }
}
