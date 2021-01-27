import React from "react";
import { Sidebar } from "./sidebar";
import "./sidebar.css";
import FadeIn from "react-fade-in";
import "./template.css";
import { Cls9Lectie } from "./cls9lectie";

export class Cls9 extends React.Component {
  render() {
    return (
      <div id="cls9">
        <Sidebar>
          <h1 id="titlu_capitol">
            Capitolul 1 {""}
            <h2 id="lectii_capitol">Lectia 1</h2>
            <h2 id="lectii_capitol">Lectia 1</h2>
            <h2 id="lectii_capitol">Lectia 1</h2>
          </h1>
          <h1 id="titlu_capitol">Capitolul 1</h1>
        </Sidebar>
        <Cls9Lectie>
          <h2 id="titlu_lectie"> Baltagul </h2>
        </Cls9Lectie>
      </div>
    );
  }
}
