import React, { useEffect } from "react";
import "./modal.scss";
import { piedpiper, x, piedpiperteam, piedpiperlogo } from "../imageimport";

const ModalPiedPiper = (props) => {
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
      <div className="modal_window_header">
        <div className="modal_window_header_titlebar">
          <div className="modal_window_header_titlebar_logo">
            <img style={{ filter: "invert(1)", width: "16px" }} src={piedpiper} alt="amrani_webdeelopment_photo_icon"></img>
          </div>
          <div className="modal_window_header_titlebar_title">
            <p>Pied Piper V2.01</p>
          </div>
          <div className="modal_window_header_titlebar_close">
            <img
              src={x}
              onClick={props.onClose}
              alt="amrani_webdeelopment_photo_close"
            ></img>
          </div>
        </div>
      </div>
      <div className="modal_window_main_piedpiper">
      <div className="modal_window_main_piedpiper_teamphoto">
        <img src={piedpiperteam}></img>
          </div>
          <div className="modal_window_main_piedpiper_info">
            <img src={piedpiperlogo} className="modal_window_main_piedpiper_info-logo"></img>
          <h1 className="modal_window_main_piedpiper_info-heading">Trial period expired</h1>
          <p className="modal_window_main_piedpiper_info-text">Your trial has been expired. You can continue to use Pied Piper by purchasing the software.</p>
          <div className="modal_window_main_piedpiper_info-footer">
            <a href="http://www.piedpiper.com/" className="modal_window_main_piedpiper_info-footer-button">License This Software</a>
          </div>

          </div>
        </div>
    </div>
  </div>

  );
};

export default ModalPiedPiper;
