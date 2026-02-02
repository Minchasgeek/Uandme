import { el } from "../utils/dom.js";

export function notFoundPage() {
  return el("div", { class: "container page" }, [
    el("h1", { class: "section__title" }, "404"),
    el("p", { class: "muted" }, "No hemos encontrado esta página."),
    el("a", { class: "btn", href: "#/" }, "Volver a inicio")
  ]);
}
