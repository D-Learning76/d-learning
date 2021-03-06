import React from "react";
import "./Motto.css";
import logo from "./Images/logo.png";

export class Motto extends React.Component {
  render() {
    return (
      <div className="Motto">
        <div id="motto">
          <h1 class="motto-text" id="motto-text1">
            -De la tineri pentru tineri-
          </h1>
          <h3 class="motto-text" id="motto-text2">
            -Orice ai face, fă-o din placere-
          </h3>
        </div>
        <img id="image" src={logo} alt="creatorii" />
      </div>
    );
  }
}
