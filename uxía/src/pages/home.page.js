import { el } from "../utils/dom.js";
import { getAllProducts } from "../services/products.service.js";
import { ProductGrid } from "../components/product/ProductGrid.js";

export function homePage() {
  const products = getAllProducts().slice(0, 6);

  const hero = el("section", { class: "hero" }, [
    el("div", { class: "container hero__inner" }, [
      el("p", { class: "kicker muted" }, "Arte · Moda · Edición limitada"),
      el("h1", { class: "hero__title" }, "Textil como lienzo."),
      el("p", { class: "hero__text" }, "Piezas artesanales inspiradas en obra pictórica, hechas con mimo y calma."),
      el("div", { class: "hero__cta" }, [
        el("a", { class: "btn", href: "#/piezas" }, "Ver piezas"),
        el("a", { class: "btn btn--ghost", href: "#/brand" }, "Conocer la marca")
      ])
    ])
  ]);

  const featured = el("section", { class: "section" }, [
    el("div", { class: "container" }, [
      el("div", { class: "section__head" }, [
        el("h2", { class: "section__title" }, "Selección"),
        el("p", { class: "muted" }, "Una mirada rápida a la colección.")
      ]),
      ProductGrid(products)
    ])
  ]);

  const wrap = el("div", {}, [hero, featured]);
  return wrap;
}
