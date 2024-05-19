/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { variationPlacements } from "@popperjs/core";

window.onload = function() {
  //write your code here
  let pronombres = "";
  let adjetivos = "";
  let sustantivos = "";
  let sustantivosEs = "";
  let dominioFinal = "";
  let dominioFinalEs = "";

  // Definimos por separado en cada array los elementos que tendrá el dominio
  let pronombresElementos = [
    "sus",
    "mis",
    "tus",
    "vuestros",
    "los",
    "esos",
    "aquellos"
  ];
  let adjetivosElementos = [
    "bonitos",
    "horrendos",
    "picantes",
    "sonrojados",
    "pequeños",
    "admirados",
    "aburridos",
    "feos",
    "salados",
    "amargos",
    "agrios"
  ];

  let sustantivosElementos = [
    "ombligos",
    "frigorificos",
    "gatos",
    "perros",
    "boligrafos",
    "libros",
    "pinos",
    "cuadros",
    "globos",
    "cubatas"
  ];

  let sustantivosEsElementos = [
    "pi",
    "coch",
    "pec",
    "chuleton",
    "movil",
    "lapiz",
    "arbol",
    "pantalon",
    "ascensor",
    "martir",
    "sillon"
  ];

  // **.com** Con forEach anidado vamos sacando la palabra con cada uno
  // de los arrays correspondientes.
  pronombresElementos.forEach(() => {
    let pronombresRandomIndex = Math.floor(
      Math.random() * pronombresElementos.length
    );
    pronombres = pronombresElementos[pronombresRandomIndex];

    adjetivosElementos.forEach(() => {
      let adjetivosRandomIndex = Math.floor(
        Math.random() * adjetivosElementos.length
      );
      adjetivos = adjetivosElementos[adjetivosRandomIndex];

      sustantivosElementos.forEach(() => {
        let sustantivosRandomIndex = Math.floor(
          Math.random() * sustantivosElementos.length
        );
        sustantivos = sustantivosElementos[sustantivosRandomIndex];
      });
    });
    dominioFinal = pronombres + adjetivos + sustantivos;
    console.log("www." + dominioFinal + ".com");
  });

  // **.es** Con forEach anidado vamos sacando la palabra con cada uno
  // de los arrays correspondientes.
  pronombresElementos.forEach(() => {
    let pronombresRandomIndex = Math.floor(
      Math.random() * pronombresElementos.length
    );
    pronombres = pronombresElementos[pronombresRandomIndex];

    adjetivosElementos.forEach(() => {
      let adjetivosRandomIndex = Math.floor(
        Math.random() * adjetivosElementos.length
      );
      adjetivos = adjetivosElementos[adjetivosRandomIndex];

      sustantivosEsElementos.forEach(() => {
        let sustantivosEsRandomIndex = Math.floor(
          Math.random() * sustantivosEsElementos.length
        );
        sustantivosEs = sustantivosEsElementos[sustantivosEsRandomIndex];
      });
    });
    dominioFinalEs = pronombres + adjetivos + sustantivosEs;
    console.log("www." + dominioFinalEs + ".es");
  });

  let dominios = [dominioFinal, dominioFinalEs];
  let dominiosFinalesIndex = Math.floor(Math.random() * dominios.length);
  let dominiosAleatorios = dominios[dominiosFinalesIndex];

  let urlWeb;

  if (dominiosAleatorios === dominioFinal) {
    urlWeb = "www." + dominioFinal + ".com";
  } else if (dominiosAleatorios === dominioFinalEs) {
    urlWeb = "www." + dominioFinalEs + ".es";
  }

  console.log(urlWeb);

  document.getElementById("urlGenerada").textContent = urlWeb;

  console.log("Hello Rigo from the console!");
};
