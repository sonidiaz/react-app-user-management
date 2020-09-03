import React, { useState } from "react";
import Button from "../components/Button";
import Styled from "styled-components";
import login from "../services/loginUser";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getUserAction } from "../redux/actions/userActions";

const Form = Styled.form`
  width: 50%;
  margin: 0 auto 50px;
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
`;
const ErrorMessage = Styled.p`
  position: relative;
  width: 80%;
  display: block;
  margin: 15px auto;
  padding: 15px 0 15px 14px;
  border: 1px solid red;
  color: white;
  background-color: red;
  
`;
const Login = ({ getUserData }) => {
  let history = useHistory();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    error: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(userData);
    if (response.error) {
      setUserData({
        ...userData,
        error: response.error,
      });
      return;
    }
    getUserData(1);
    sessionStorage.setItem("token", response.token);
    history.push("/");
  };
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
      error: false,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <Form onSubmit={handleSubmit}>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
          />
          <Button colorButton="primary" widthButton={"large"}>Send</Button>
        </Form>
        {userData.error && userData.error && (
          <ErrorMessage>{userData.error}</ErrorMessage>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (id) => {
      dispatch(getUserAction(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
