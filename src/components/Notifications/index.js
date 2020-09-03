import React from "react";
import { NotificaionStyleCmp } from "./styled";

const Notifications = ({ children, handleShowNotification }) => {
  return (
    <NotificaionStyleCmp>
      <h3>{children}</h3>
    </NotificaionStyleCmp>
  );
};

export default Notifications;
