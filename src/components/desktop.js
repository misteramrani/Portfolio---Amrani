import { React, useState } from "react";
import "./desktop.scss";
import {
  folder,
  about,
  code,
  contact,
  photos,
  snake,
  cv,
  piedpiper,
} from "../imageimport";
import ModalAbout from "./modal_about";
import ModalNewFolder from "./modal_newfolder";
import ModalPhoto from "./modal_photo";
import ModalPiedPiper from "./modal_piedpiper";

const Desktop = () => {
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState();
  const [buttons, setButtons] = useState([
    {
      modal_id: 3,
      icon: code,
      title: "Web Dev",
      focus: false,
    },
    {
      modal_id: 2,
      icon: photos,
      title: "Pics",
      focus: false,
    },
    {
      modal_id: 4,
      icon: cv,
      title: "CV",
      focus: false,
    },
    {
      modal_id: 5,
      icon: contact,
      title: "Contact",
      focus: false,
    },
    {
      modal_id: 6,
      icon: about,
      title: "About",
      focus: false,
    },
    {
      modal_id: 1,
      icon: folder,
      title: "New Folder",
      focus: false,
    },
    {
      modal_id: 7,
      icon: snake,
      title: "Snake",
      focus: false,
    },
    {
      modal_id: 8,
      icon: piedpiper,
      title: "Pied Piper",
      focus: false,
    },
  ]);

  const ModalType = () => {
    switch (contentModal) {
      case 1:
        return (
          <ModalNewFolder
            show={showModal}
            onClose={() => setShowModal(false)}
          />
        );
      case 2:
        return (
          <ModalPhoto
            show={showModal}
            onClose={() => setShowModal(false)}
          />
        );
      case 3:
        return <ModalAbout />;
      case 4:
        return <ModalAbout />;
      case 5:
        return <ModalAbout />;
      case 6:
        return (
          <ModalAbout show={showModal} onClose={() => setShowModal(false)} />
        );
      case 7:
        return <ModalAbout />;
      case 8:
        return (
          <ModalPiedPiper show={showModal} onClose={() => setShowModal(false)} />
        );
      default:
        return "";
    }
  };

  return (
    <div className="desktop">
      {buttons.map((item, i) => (
        <div
          test="test"
          onClick={() => {
            setShowModal(true);
            setContentModal(item.modal_id);
          }}
          className="desktop_items"
        >
          <img
            className="desktop_items-icon"
            alt="amrani_webdevelopment_photo_icons"
            src={item.icon}
          ></img>
          <span className="desktop_items-title">{item.title}</span>
        </div>
      ))}
      <ModalType />
    </div>
  );
};

export default Desktop;
