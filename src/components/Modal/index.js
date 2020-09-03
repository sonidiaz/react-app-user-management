import React from "react";
import Button from "../Button/";
import { deleteUserAction } from "../../redux/actions/usersActions";
import { useHistory } from "react-router-dom";
import { ModalStyldCmp } from "./styled";
import { connect } from "react-redux";

const Modal = ({ users, deleteUser, idDelete, handleModal }) => {
  const history = useHistory();
  const handledelete = (action) => {
    if (action === "confirm") {
      deleteUser(users, idDelete);
      history.push("/");
      return;
    } else {
      handleModal(false);
    }
  };
  return (
    <ModalStyldCmp className="container-modal">
      <div className="main-modal">
        <Button
          colorButton="primary"
          action={() => {
            handledelete("confirm");
          }}
        >
          Confirm
        </Button>
        <Button
          colorButton="secudary"
          action={() => {
            handledelete("cancel");
          }}
        >
          Cancel
        </Button>
      </div>
    </ModalStyldCmp>
  );
};
const mapStateToProps = (state) => {
  return {
    users: state.listUsers.listUsers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id, users) => {
      dispatch(deleteUserAction(id, users));
    },
    updateUser: () => {},
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
