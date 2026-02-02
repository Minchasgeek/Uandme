import { el } from "../utils/dom.js";
import { getProductById } from "../services/products.service.js";
import { notFoundPage } from "./notfound.page.js";
import { clear } from "../utils/dom.js";

export function productPage({ id }) {
  const product = getProductById(id);
  if (!product) return notFoundPage();

  let active = product.images?.[0] || "";

  const mainImg = el("img", {
    class: "product__main-img",
    src: active,
    alt: product.name
  });

  const thumbs = el(
    "div",
    { class: "thumbs" },
    (product.images || []).map((src) =>
      el("button", {
        class: `thumb ${src === active ? "thumb--active" : ""}`,
        type: "button",
        onClick: () => {
          active = src;
          mainImg.src = active;

          for (const b of thumbs.querySelectorAll(".thumb")) {
            b.classList.toggle("thumb--active", b.dataset.src === active);
          }
        },
        dataset: { src }
      }, [
        el("img", { src, alt: `Vista de ${product.name}`, loading: "lazy" })
      ])
    )
  );

  const info = el("div", { class: "product__info" }, [
    el("p", { class: "kicker muted" }, product.category),
    el("h1", { class: "product__title" }, product.name),
    el("p", { class: "product__desc" }, product.description || ""),
    product.materials ? el("p", { class: "muted" }, product.materials) : null,
    el("div", { class: "product__actions" }, [
      el("a", { class: "btn", href: "mailto:hello@uandme.studio?subject=Consulta%20pieza" }, "Consultar / Encargar"),
      el("a", { class: "btn btn--ghost", href: "#/piezas" }, "Volver")
    ])
  ]);

  const layout = el("div", { class: "product" }, [
    el("div", { class: "product__media" }, [mainImg, thumbs]),
    info
  ]);

  return el("div", { class: "container page" }, [layout]);
}
