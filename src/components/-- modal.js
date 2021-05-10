import React, { useEffect } from "react";
import "./modal.scss";
import { amrani, x } from "../imageimport";
import ModalAbout from "./modal_about";

const Modal = (props) => {
  const closeModalOnEscape = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
      console.log(e);
    }
  };

  const SubModal = () => {
    switch (props.content) {
      case 1:
        return <ModalAbout />;
      case 2:
        return <ModalAbout />;
      case 3:
        return <ModalAbout />;
      case 4:
        return <ModalAbout />;
      case 5:
        return <ModalAbout />;
      case 6:
        return <ModalAbout />;
      case 7:
        return <ModalAbout />;
      case 8:
        return <ModalAbout />;
      default:
        return "";
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeModalOnEscape);
    return function cleanup() {
      document.body.addEventListener("keydown", closeModalOnEscape);
    };
  }, []);

  // console.log(props.content);

  return (
    <div
      className={`modal ${props.show ? "showmodal" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal_window" onClick={(e) => e.stopPropagation()}>
        <div className="modal_window_header">
          <div className="modal_window_header_titlebar">
            <div className="modal_window_header_titlebar_logo">
              <img src={amrani} alt="amrani_webdeelopment_photo_icon"></img>
            </div>
            <div className="modal_window_header_titlebar_title">
              <p>About me - Notepad</p>
            </div>
            <div className="modal_window_header_titlebar_close">
              <img
                src={x}
                onClick={props.onClose}
                alt="amrani_webdeelopment_photo_close"
              ></img>
            </div>
          </div>
          <div className="modal_window_header_menubar">
            <span>File</span>
            <span>Edit</span>
            <span>View</span>
            <span>Help</span>
          </div>
        </div>

        <SubModal />
      </div>
    </div>
  );
};

export default Modal;
