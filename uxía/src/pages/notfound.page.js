import { el } from "../utils/dom.js";

export function notFoundPage() {
  return el("div", { class: "page container" }, [
    el("h1", { class: "h1" }, "404"),
    el("p", { class: "muted" }, "No se ha encontrado la página."),
    el("a", { href: "#/", class: "link" }, "Volver al inicio")
  ]);
}