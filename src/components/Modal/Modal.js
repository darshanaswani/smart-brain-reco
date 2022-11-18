import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ children }) => {
  const ele = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(ele);

    return () => {
      modalRoot.removeChild(ele);
    };
  }, []);

  return ReactDOM.createPortal(children, ele);
};

export default Modal;
