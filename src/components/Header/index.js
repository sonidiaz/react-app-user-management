import React from "react";
import Button from "../Button/";
import SignOut from "../SignOut/";
import { HeaderStyleCmp } from "./styled";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import userAvatarFake from './../../assets/images/avatar-fake.png';

const showSingOn = (isAuth, location) => {
  if(isAuth) {
    return <SignOut avatar={userAvatarFake} />
  }
  if(location.pathname !== '/login'){
    return <Button colorButton="secudary" href="/login">Login</Button>
  }
}
const Header = ({ isAuth }) => {
  let location = useLocation();
  const showBackButton = () => {
    if (location.pathname !== "/") {
      return <Button colorButton="secudary" widthButton="small" typeButton="ancla" href="/">Back</Button>;
    }
    return <div></div>;
  };
  return (
    <HeaderStyleCmp className="container">
      <div className="row">
        {showBackButton()}
        {showSingOn(isAuth, location)}
      </div>
    </HeaderStyleCmp>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.userInfo.isAuth,
    userPhoto: state.userInfo.info.avatar,
  };
};

export default connect(mapStateToProps)(Header);
