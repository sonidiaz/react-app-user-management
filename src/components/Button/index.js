import React from "react";
import { ButtonStyleCmp } from "./style";
import { Link } from "react-router-dom";

const Button = ({
  children,
  href,
  action,
  widthButton,
  colorButton,
}) => {
  return href ? (
    <ButtonStyleCmp
      widthButton={widthButton}
      colorButton={colorButton}
      typeButton={"ancla"}
    >
      <Link to={href}>{children}</Link>
    </ButtonStyleCmp>
  ) : (
    <ButtonStyleCmp
      widthButton={widthButton}
      colorButton={colorButton}
      typeButton={"button"}
      onClick={action}
    >
      {children}
    </ButtonStyleCmp>
  );
};

export default Button;
