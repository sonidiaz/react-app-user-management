import {combineReducers} from 'redux';
import listUsers from './usersReducer';
import userInfo from './userReducer';

export default combineReducers({
  listUsers,
  userInfo,
})