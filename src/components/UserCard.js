import React from "react";
import Button from "./Button";
import styled from "styled-components";

const BoxUserCard = styled.article`
  position: relative;
  width: 49%;
  text-align: center;
  display: inline-block;
  background: "white";
  padding: 15px 0;
  margin-bottom: 15px;
  color: ${({ login }) => {
    if (login) {
      return "black";
    }
    return "black";
  }};
  border: ${({ login }) => {
    if (login) {
      return "1px solid black";
    }
    return "1px solid grey";
  }};
  h3 {
    margin: 0;
  }
  button {
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const UserCard = ({ name, lastname, id, login }) => {
  const handleRef = (ref) => {
    ref.current.disabled = true;
  }
  return (
    <>
      <BoxUserCard login={login}>
        <hgroup>
          <h3>{name}</h3>
          <h3>{lastname}</h3>
        </hgroup>
        {login ? (
          <Button handleRef={handleRef} colorButton="secudary" href={`profile/${id}`}>
            View Profile
          </Button>
        ) : (
          <div style={{opacity: .3}}>
            <Button colorButton="secudary">
              View Profile
            </Button>
          </div>
        )}
      </BoxUserCard>
    </>
  );
};

export default UserCard;
