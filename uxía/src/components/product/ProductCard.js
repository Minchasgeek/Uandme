import { el } from "../../utils/dom.js";

export function ProductCard(p) {
  const img = p.images?.[0] || "";

  return el("article", { class: "pcard" }, [
    el("a", { class: "pcard__link", href: `#/producto/${p.id}` }, [
      el("div", { class: "pcard__media" }, [
        el("img", { src: img, alt: p.name, loading: "lazy" })
      ]),
      el("p", { class: "pcard__name" }, p.name)
    ])
  ]);
}