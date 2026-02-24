import { el } from "../utils/dom.js";

export function studioPage() {
  return el("div", { class: "page container" }, [
    el("div", { class: "studio" }, [
      // Columna izquierda: texto
      el("div", { class: "studio__text" }, [
        el("h1", { class: "h1" }, "STUDIO"),
        el("div", { class: "prose" }, [
          el("p", {}, "U&me Studio es un proyecto donde el lenguaje artístico se traslada al objeto."),
          el("p", {}, "Las colecciones se desarrollan en ediciones limitadas que transitan entre el vestir y el habitar. Cada pieza nace del gesto y se construye con atención al material."),
          el("p", {}, "Desde un pequeño taller en Vigo, se diseña y produce íntegramente en España, con tiempos cuidados y producciones reducidas."),
          el("p", {}, "La pintura es el punto de partida. El estampado se trabaja como extensión de la obra: lo que comienza en papel adquiere movimiento al entrar en contacto con el tejido."),
          el("p", {}, "La exclusividad y la producción responsable forman parte natural del proceso creativo.")
        ])
      ]),

      // Columna derecha: composición de imágenes
      el("div", { class: "studio__media" }, [
        el("img", {
          class: "studio__img studio__img--wide",
          src: "/assets/tej.jpeg",
          alt: "Proceso de trabajo en el estudio",
          loading: "lazy"
        }),
        el("img", {
          class: "studio__img studio__img--tall",
          src: "/assets/tej2.jpeg",
          alt: "Detalle del estudio",
          loading: "lazy"
        })
      ])
    ])
  ]);
}