import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { updateUserAction } from "../redux/actions/usersActions";
import Styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Notifications from "../components/Notifications";

const Form = Styled.form`
  width: 50%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  input{
    width: 100%;
    height: 48px;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-left: 15px;
    box-sizing: border-box;
  }
  .container-button{
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  button{
    width: 48%;
  }
`;

const EditProfile = ({ users, editUser, isFetching }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [userEdit, setUserEdit] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const { id } = useParams();
  const history = useHistory();
  const getUserEdit = users.find((user, i) => user.id === Number(id));
  useEffect(() => {
    setUserEdit(getUserEdit);
  }, [getUserEdit]);
  const handleSubmit = (e) => {
    e.preventDefault();
    editUser(Number(id), userEdit, users);
    setShowNotification(true);
    if (!isFetching) {
      setTimeout(() => {
        history.push(`/profile/${Number(id)}`);
      }, 1500);
    }
  };
  const handleChange = (e) => {
    setUserEdit({
      ...userEdit,
      [e.target.name]: e.target.value,
    });
  };
  const handleShowNotification = () => {};
  return (
    <div className="container">
      {showNotification && (
        <Notifications handleShowNotification={handleShowNotification}>
          Los datos se actualizaron correctamente
        </Notifications>
      )}
      <div className="row">
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="first_name"
            onChange={handleChange}
            placeholder="Name"
            value={`${userEdit.first_name}`}
          />
          <input
            type="text"
            name="last_name"
            onChange={handleChange}
            placeholder="Last Name"
            value={`${userEdit.last_name}`}
          />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            value={`${userEdit.email}`}
          />
          <div className="container-button">
            <Button
              widthButton="large"
              colorButton="secudary"
              href={`/profile/${Number(id)}`}
            >
              Cancel
            </Button>
            <Button widthButton="large" colorButton="primary">
              Update
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.listUsers.listUsers,
    isFetching: state.listUsers.isFetching,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (id, user, listUser) => {
      dispatch(updateUserAction(id, user, listUser));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);
