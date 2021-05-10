import React, { useEffect } from "react";
import "./modal.scss";
import { amrani, x, back, forward, reload, dots } from "../imageimport";

const ModalPhoto = (props) => {
  const closeModalOnEscape = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
      console.log(e);
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeModalOnEscape);
    return function cleanup() {
      document.body.addEventListener("keydown", closeModalOnEscape);
    };
  }, []);

  return (
    <div
      className={`modal ${props.show ? "showmodal" : ""}`}
      onClick={props.onClose}
    >
      <div className="modal_window" onClick={(e) => e.stopPropagation()}>
        <div className="modal_window_header photo">
          <div className="modal_window_header_titlebar">
            <div className="modal_window_header_titlebar_logo">
              <img
                src={amrani}
                style={{ width: "16px" }}
                alt="amrani_webdevelopment_photo_icon"
              ></img>
            </div>
            <div className="modal_window_header_titlebar_title">
              <p>AMRANIPHOTO.com | Lightfox Explorer</p>
            </div>
            <div className="modal_window_header_titlebar_close">
              <img
                src={x}
                onClick={props.onClose}
                alt="amrani_webdevelopment_photo_close"
              ></img>
            </div>
          </div>
          <div className="modal_window_header_menubar photo">
            <img
              className="modal_window_header_menubar-browser" src={back}
              style={{ width: "16px" }}
              alt="amrani_webdevelopment_photo_icon"
            ></img>
            <img className="modal_window_header_menubar-browser"
              src={forward}
              style={{ width: "16px" }}
              alt="amrani_webdevelopment_photo_icon"
            ></img>
            <img className="modal_window_header_menubar-browser"
              src={reload}
              style={{ width: "16px" }}
              alt="amrani_webdevelopment_photo_icon"
            ></img>
            <div className="modal_window_header_menubar-browser-url">amraniphoto.com/</div>
            <img className="modal_window_header_menubar-browser more"
              src={dots}
              style={{ width: "16px" }}
              alt="amrani_webdevelopment_photo_icon"
            ></img>
          </div>
        </div>

        <div className="modal_window_main">
          <iframe
            className="modal_window_main_iframe"
            src="https://amraniphoto.com/portfolio"
            title="amraniphoto"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ModalPhoto;
