import styled from "styled-components";

export const BoxUserCard = styled.article`
  position: relative;
  width: 49%;
  margin-bottom: 16px;
  text-align: center;
  hgroup {
    position: relative;
    display: inline-block;
    width: 100%;
    margin-bottom: 1vh;
    background: 'white';
    color: ${({ login }) => {
      if (login) {
        return "var(--primary-color)";
      }
      return "black";
    }};
    border: ${({ login }) => {
      if (login) {
        return "1px solid var(--primary-color)";
      }
      return "white";
    }};
  }
`;

