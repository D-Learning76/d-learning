import React from "react";
import { Sidebar } from "./sidebar";
import "./sidebar.css";
import "./template.css";
import { Cls9Lectie } from "./cls9lectie";
import "./lectie.css";
import { Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import FadeIn from "react-fade-in";

function Cls9() {
  return (
    <FadeIn>
      <div id="cls9">
        <Sidebar>
          <Menu iconShape="square">
            <MenuItem>Dashboard</MenuItem>
            <SubMenu title="Components">
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>{" "}
        <Cls9Lectie>
          <h1 id="titlu_lectie"> Progrsesii Aritmetice </h1>

          <p id="definitie">
            {" "}
            <strong id="strong"> Definitie </strong> Un șir de numere reale în
            care orice termen începând cu al doilea se obține din termenul
            precedent adunat{" "}
            <bold id="coloare">
              {" "}
              cu același număr fixat, se numește PROGRESIE ARITMETICĂ:{" "}
            </bold>
          </p>
        </Cls9Lectie>
      </div>
    </FadeIn>
  );
}

export default Cls9;
