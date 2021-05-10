import React, { useEffect } from "react";
import "./modal.scss";
import { folder, x } from "../imageimport";

const ModalNewFolder = (props) => {
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
            <img src={folder} style={{filter: "invert(1)", width: "16px"}} alt="amrani_webdevelopment_photo_icon"></img>
          </div>
          <div className="modal_window_header_titlebar_title">
            <p>New Folder</p>
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

      <div className="modal_window_main">
          <p>What is Lorem Ipsum?</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).{" "}
          </p>
        </div>
        <div className="modal_window_footer">
          <div className="modal_window_footer-txt">ln 10</div>
          <div className="modal_window_footer-txt">100%</div>
          <div className="modal_window_footer-txt">UTF-8</div>
        </div>
    </div>
  </div>

  );
};

export default ModalNewFolder;
