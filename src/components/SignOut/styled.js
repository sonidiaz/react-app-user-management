import styled from 'styled-components'

export const SignOutStyledCmp = styled.div`
  position: relative;
  width: 73px;
  height: 35px;
  max-width: 120px;
  display: flex;
  align-items: center;
  .avatar{
    width: 48%;
    border-radius: 50%;
    overflow: hidden;
  }
  img{
    width: 75%;
    height: auto;
  }
  .icon-logout{
    width: 0; 
    height: 0; 
    margin-left: 7px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid black;
  }
  .box-logout{
    position: absolute;
    width: 100%;
    bottom: -40px;
    background-color: white;
    color: black;
  }
  button{
    background-color: var(--primary-color);
    padding: 6px 8px;
    margin: 8px 0;
    border: 0;
    color: white;
  }
`