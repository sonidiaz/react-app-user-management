import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import { deleteUserAction } from "../redux/actions/usersActions";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import Styled from "styled-components";

const ProfileStyleCmp = Styled.div`
  max-width: 335px;
  .user-info{
    text-align: center;
  }
  .wrapper-avatar{
    position: relative;
    width: 125px;
    height: 125px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
  }
  ul{
    padding-left: 0;
    list-style: none;
  }
  button:first-child{
    margin-right: 10px;
  }
`;
const Profile = ({ users }) => {
  const [userInfo, setUserInfo] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const params = useParams();

  useEffect(() => {
    const getUserInfo = () => {
      if (users.length > 0) {
        const userData = users.find((user) => user.id === Number(params.id));
        return userData;
      } else {
        return [];
      }
    };
    setUserInfo(getUserInfo());
  }, [params.id, users]);

  const handleDeleteUser = (isShow) => {
    setModalShow(isShow);
  };
  return (
    <>
      {modalShow && (
        <Modal idDelete={params.id} handleModal={handleDeleteUser}></Modal>
      )}
      <ProfileStyleCmp className="container">
        <div className="user-info">
          <div className="wrapper-avatar">
            <img src={`${userInfo.avatar}`} alt="" />
          </div>
          <hgroup>
            <ul>
              <li>
                {userInfo.first_name} {userInfo.last_name}
              </li>
              <li>{userInfo.email}</li>
            </ul>
          </hgroup>
        </div>
        <div className="row justify-center">
          <Button colorButton="primary" action={() => handleDeleteUser(true)}>Delete User</Button>
          <Button colorButton="secudary" href={`/edit-profile/${userInfo.id}/`}>Update User</Button>
        </div>
      </ProfileStyleCmp>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
