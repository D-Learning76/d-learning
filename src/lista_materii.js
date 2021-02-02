import React from "react";
import { Subject } from "./subject";
import "./subject.css";
import mate from "./Images/mate.jpg";
import chimie from "./Images/chimie.jpg";
import engleza from "./Images/engleza.jpg";
import romana from "./Images/romana.jpg";
import fizica from "./Images/fizica.jpg";
import franceza from "./Images/franceza.jpg";
import biologie from "./Images/biologie.jpg";
import tic from "./Images/TIC.jpg";
import programare from "./Images/programare.jpg";

//size of the image : 540x300

export class ListaMaterii extends React.Component {
  render() {
    return (
      <div id="lista-materii">
        <Subject
          title="Matematică"
          img={mate}
          alt="Matematica"
          link="/lectie"
        />

        <Subject title="Lecții indisponibile" img={romana} alt="Romana" />
        <Subject title="Lecții indisponibile" img={chimie} alt="Chimie" />
        <Subject title="Lecții indisponibile" img={engleza} alt="Engleza" />
        <Subject title="Lecții indisponibile" img={fizica} alt="Fizica" />
        <Subject title="Lecții indisponibile" img={fizica} alt="Fizica" />
        <Subject title="Lecții indisponibile" img={franceza} alt="Franceza" />
        <Subject title="Lecții indisponibile" img={biologie} alt="Biologie" />
        <Subject
          title="Lecții indisponibile"
          img={programare}
          alt="Programare"
        />
        <Subject title="Lecții indisponibile" img={tic} alt="TIC" />
      </div>
    );
  }
}
