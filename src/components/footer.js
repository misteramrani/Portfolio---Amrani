import React from "react";
import "./footer.scss";
import { logo } from "../imageimport";
import ReactDOM from "react-dom";
import FooterContent from "./footer_content";

function Footer() {
  const currDate = new Date().toLocaleDateString();
  const clock = () => {
    const element = (
      <div>
        {new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    );
    ReactDOM.render(element, document.getElementById("time"));
  };
  setInterval(clock, 1000);

  return (
    <div className="footer">
      <input
        className="footer_startmenu"
        id="footer_startmenu"
        type="checkbox"
        name="menu"
      />
      <label for="footer_startmenu">
        <img
          className="footer_logo"
          alt="amrani_webdevelopment_photo_logo"
          src={logo}
        ></img>
      </label>
      <div className="footer_startmenu_menucontent"><FooterContent  />
      </div>

      <div className="footer_info">
        <div id="time" className="footer_info-time">
          {clock}
        </div>
        <div className="footer_info-date">{currDate}</div>
      </div>
    </div>
  );
}

setInterval(1000);

export default Footer;
