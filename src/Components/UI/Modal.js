import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

// Backdrop is only for to make the the background Blur And Black.
const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

//ModalOverlay component is used to wrap the props.children and represent the content of the modal
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <>
      {/* here in ReactDom.createportal basically give two arguments 1st what to render and 2nd where to reder */}
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
