import { el } from "../../utils/dom.js";

export function ProductCard(product) {
  const imgSrc = product.images?.[0] || "";
  return el("article", { class: "card" }, [
    el("a", { class: "card__link", href: `#/pieza/${product.id}` }, [
      el("div", { class: "card__media" }, [
        el("img", { class: "card__img", src: imgSrc, alt: product.name, loading: "lazy" })
      ]),
      el("div", { class: "card__body" }, [
        el("h3", { class: "card__title" }, product.name),
        el("p", { class: "card__meta muted" }, product.category)
      ])
    ])
  ]);
}
