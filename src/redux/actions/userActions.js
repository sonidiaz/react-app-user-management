import getUser from '../../services/getUser';
export const FETCH_REQUEST_USER = 'FETCH_REQUEST_USER';
export const FETCH_REQUEST_SUCCESS_USER = 'FETCH_REQUEST_SUCCESS_USER';

const getUserAction = (id) => (dispatch) => {
  dispatch({
    type: FETCH_REQUEST_USER
  })
  getUser(id).then((data) => {
    dispatch({
      type: FETCH_REQUEST_SUCCESS_USER,
      payload:{
        userInfo: data.data
      }
    })
  });
}

const UserSignOut = () => (dispatch) => {
  dispatch({
    type: 'USER_SIGN_OUT'
  });
  sessionStorage.clear();
  return true;
}


export {getUserAction, UserSignOut};