import { el } from "../utils/dom.js";
import { getById } from "../services/products.service.js";
import { notFoundPage } from "./notfound.page.js";

function linesToNodes(text) {
  if (!text) return [];
  return String(text)
    .split("\n")
    .map((line) => el("p", { class: "prod__p" }, line.trim()))
    .filter((p) => p.textContent.length > 0);
}

export function productPage({ id }) {
  const p = getById(id);
  if (!p) return notFoundPage();

  const imgs = (p.images || []).slice(0, 4);

  return el("div", { class: "page container" }, [
    el("div", { class: "prod" }, [
      // Galería (2 columnas)
      el(
        "div",
        { class: "prod__gallery" },
        imgs.map((src) =>
          el("img", {
            class: "prod__img",
            src,
            alt: p.name,
            loading: "lazy"
          })
        )
      ),

      // Info a la derecha
      el("aside", { class: "prod__info" }, [
        el("p", { class: "muted small" }, p.category || ""),
        el("div", { class: "prod__top" }, [
          el("h1", { class: "h1 prod__h1" }, p.name),
          p.price ? el("p", { class: "price" }, p.price) : null
        ]),
        p.description ? el("p", { class: "prod__lead" }, p.description) : null,
        p.availability ? el("p", { class: "muted" }, p.availability) : null,

        p.text ? el("div", { class: "prod__block" }, linesToNodes(p.text)) : null,

        el("div", { class: "divider" }),

        el("p", { class: "prod__label" }, "DETALLES TÉCNICOS"),
        p.details ? el("div", { class: "prod__block" }, linesToNodes(p.details)) : el("p", {}, "—"),

        el("div", { class: "divider" }),

        el("p", { class: "prod__label" }, "CUIDADOS"),
        p.care ? el("div", { class: "prod__block" }, linesToNodes(p.care)) : el("p", {}, "—")
      ])
    ])
  ]);
}