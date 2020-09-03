import Styled from 'styled-components'

export const NotificaionStyleCmp = Styled.div`
  position: fixed;
  width: 30%;
  height: 80px;
  right: 0;
  top: 20px;
  display: flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: white;
  z-index: 44;
  background: var(--success-color);
  text-align: center;
  font-size: 12px;
  @media (max-width: 768px) {
    width: 50%;
  }
`