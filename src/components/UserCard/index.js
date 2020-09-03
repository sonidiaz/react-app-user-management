import React from 'react';
import Button from './Button'
import styled from 'styled-components';

const BoxUserCard = styled.article`
    position: relative;
    width: 49%;
    margin-bottom: 16px;
    text-align: center;
    hgroup{
      position: relative;
      display: inline-block;
      width: 100%;
      margin-bottom: 1vh;
      background: ${({login}) => {
        if(login){
          return 'var(--primary-color)'
        }
        return 'white'
      }};
      color: ${({login}) => {
        if(login){
          return 'white'
        }
        return 'black'
      }};
      border: 1px solid grey;

    }
`

const UserCard = ({name, lastname, id, login}) => {
  return (
    <>
      <BoxUserCard login={login}>
        <hgroup>
          <h4>Name: {name}</h4>
          <h5>Last Name: {lastname}</h5>
        </hgroup>
        {
          login && (
            <Button href={`profile/user/${id}`}>View Profile</Button>
          )
        }
      </BoxUserCard>
    </>
   );
}
 
export default UserCard;