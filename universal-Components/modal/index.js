import React, { useState } from "react";
import { ModalOverlay } from "./styles/modal.style";

const Modal = ({ display, content }) => {
  return (
    <ModalOverlay show={display}>
      <div className="modalContent">{content}</div>
    </ModalOverlay>
  );
};

export default Modal;
