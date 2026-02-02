import { el } from "../utils/dom.js";

export function brandPage() {
  return el("div", { class: "container page" }, [
    el("div", { class: "section__head" }, [
      el("h1", { class: "section__title" }, "Brand"),
      el("p", { class: "muted" }, "U&me Studio explora el cruce entre arte y textil, en piezas limitadas.")
    ]),
    el("div", { class: "prose" }, [
      el("p", {}, "U&me Studio es un espacio donde arte y moda se encuentran para dar forma a piezas únicas, atemporales y cuidadosamente elaboradas. La marca propone ediciones limitadas que transitan entre el vestir y el habitar, pensadas para quienes valoran la singularidad, la calidad y el carácter en los objetos que les acompañan"),
      el("p", {}, "Diseñada íntegramente y fabricada en España, U&me Studio nace en un pequeño atelier en Vigo, ciudad de origen de su fundadora. Cada colección se desarrolla a partir de un proceso íntimo, honesto y consciente, con producciones reducidas y una atención especial al detalle y a los materiales"),
      el("p", {}, "La práctica artística es el punto de partida. Formada en Bellas Artes, la fundadora traslada el lenguaje pictórico al diseño textil, convirtiendo la obra fija en una expresión en movimiento. Cada estampado es una pieza original que se transforma al entrar en contacto con el tejido, adquiriendo cuerpo, ritmo y vidapropia."),
      el("p", {}, "U&me Studio entiende la exclusividad, la sostenibilidad y lo hecho a mano como valores esenciales, integrados de manera natural en cada fase del proceso creativo.")
    ])
  ]);
}
