import Styled from 'styled-components';


export const ModalStyldCmp = Styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #00000087;
    padding: 50px 0;
    box-sizing: border-box;
    z-index: 1;
    .main-modal{
      position: relative;
      width: 32%;
      height: 100%;
      max-width: 224px;
      display: flex;
      margin: 0 auto;
      padding: 0 40px;
      background-color: white;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
`
