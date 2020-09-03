import styled from 'styled-components';

const widthButton = {
  small: '',
  medium: '50%',
  large: '100%'
}

export const ButtonStyleCmp = styled.button`
  position: relative;
  width: ${(props) => widthButton[props.widthButton] };
  color: ${(props) => props.textColor || 'white'};
  background: ${(props) => {
    switch (props.colorButton) {
      case 'primary':
        return 'var(--primary-color)'
      case 'secudary':
        return 'var(--secondary-color)'
      default:
        break;
    }
  }};
  border-radius: 8px;
  border: 1px solid var(--secundary-color);
  padding: ${({ typeButton }) => {
        if (typeButton === 'ancla') {
          return "0";
        }
        return "10px 30px";
      }};
  a{
    display: block;
    text-decoration: none;
    color: white;
    padding: 10px 30px;
  }
`