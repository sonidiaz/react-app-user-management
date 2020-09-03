import getUsers from "../../services/usersList";
import updateUser from "../../services/updateUser";
import deleteUser from "../../services/deletetUser";
export const FETCH_REQUEST_USERS = "FETCH_REQUEST_USERS";
export const FETCH_REQUEST_SUCCESS = "FETCH_REQUEST_SUCCESS";

const getUsersAction = (id) => (dispatch) => {
  dispatch({
    type: FETCH_REQUEST_USERS,
  });
  getUsers(id).then((data) => {
    dispatch({
      type: FETCH_REQUEST_SUCCESS,
      payload: {
        listUsers: data,
      },
    });
  });
};
const deleteUserAction = (listUsers, id) => (dispatch) => {
  dispatch({ type: "FETCH_REQUEST_USER" });
  deleteUser(id).then((data) => {
    const newListUsers = listUsers.filter((user) => {
      if (user.id !== Number(id)) {
        return user;
      }
    });
    dispatch({
      type: "DELETE_USER_FROM_LIST",
      payload: {
        listUsers: newListUsers,
      },
    });
    return true;
  });
};

const updateUserAction = (id, userFromAction, listUser) => (dispatch) => {
  dispatch({
    type: FETCH_REQUEST_USERS,
  });
  updateUser(id).then((data) => {
    if (data) {
      let temp = [];
      const newArray = listUser.filter((user) => {
        return user.id !== userFromAction.id;
      });
      temp = newArray.concat(userFromAction);
      dispatch({
        type: "UPDATE_USER_FROM_LIST",
        payload: {
          listUsers: temp,
        },
      });
    }
  });
};
export { getUsersAction, deleteUserAction, updateUserAction };
