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
            <MenuItem id="sidebar_title">Matematica - Cls 9</MenuItem>
            <SubMenu title="Algebra">
              <SubMenu title="Multimi">
                <MenuItem>Notiunea de multime</MenuItem>
                <MenuItem>Operatii cu multimi</MenuItem>
                <MenuItem>Submultimi</MenuItem>
                <MenuItem>Exercitii</MenuItem>
                <MenuItem>NZQR</MenuItem>
              </SubMenu>
              <SubMenu title="Logica Matematica">
                <MenuItem>Ce este logica matematica?</MenuItem>
                <MenuItem> Rationamente logice</MenuItem>
                <MenuItem>Rationamentul deductiv 1</MenuItem>
                <MenuItem>Rationamentul deductiv 2</MenuItem>
                <MenuItem> Rationamentul inductiv 1</MenuItem>
                <MenuItem>Rationamentul inductiv 2</MenuItem>
                <MenuItem> Propozitii conditionale</MenuItem>
                <MenuItem>Exercitii</MenuItem>
              </SubMenu>
              <SubMenu title="Siruri si Progresii">
                <MenuItem>Definitia unui Sir</MenuItem>
                <MenuItem> Progresii Aritmetice</MenuItem>
                <MenuItem>Exercitii</MenuItem>
                <MenuItem> Elementul n dintr-o progresie aritmetica</MenuItem>
                <MenuItem>Exercitii</MenuItem>
                <MenuItem>Suma primilor n termeni</MenuItem>
                <MenuItem>Exercitii</MenuItem>
                <MenuItem> Progresii aritmetice</MenuItem>
                <MenuItem>Exercitii</MenuItem>
                <MenuItem> Suma primilor n termeni</MenuItem>
                <MenuItem> Exemple</MenuItem>
              </SubMenu>
            </SubMenu>
            <SubMenu title="Geometrie">
              <SubMenu title="Vectori">
                <MenuItem>Vectori in plan</MenuItem>
                <MenuItem>Componentele unui vector</MenuItem>
                <MenuItem>Adunarea a doi vectori</MenuItem>
                <MenuItem>Operatii cu vectori</MenuItem>
                <MenuItem>Diferenta dintre 2 vectori</MenuItem>
                <MenuItem>Inmultirea a doi vectori</MenuItem>
                <MenuItem>Inmultirea cu un scalar</MenuItem>
              </SubMenu>

              <SubMenu title="Trigonometrie">
                <MenuItem>Introducerea</MenuItem>
                <MenuItem>Functiile trigonometrice de baza</MenuItem>
                <MenuItem>Exercitii</MenuItem>
                <MenuItem>Radieni si Grade</MenuItem>
                <MenuItem>Din grade in radieni si invers</MenuItem>
              </SubMenu>
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
