import { el } from "../utils/dom.js";
import { getAllProducts } from "../services/products.service.js";
import { ProductGrid } from "../components/product/ProductGrid.js";

export function homePage() {
  const products = getAllProducts().slice(0, 6);
  const heroImg = products[0]?.images?.[0] || "";

  const topNote = el("div", { class: "topnote" }, [
    el("div", { class: "container topnote__inner" }, [
      el("span", { class: "muted" }, " Edición limitada · Hecho en España")
    ])
  ]);

  const heroBg = products[0]?.images?.[0] || "";

const hero = el("section", {
  class: "heroBg",
  style: `background-image: url('${heroBg}')`
}, [
  el("div", { class: "heroBg__overlay" }),
  el("div", { class: "heroBg__content" }, [
    el("p", { class: "heroBg__kicker" }, "ARTE · MODA · EDICIÓN LIMITADA"),
    el("h1", { class: "heroBg__title" }, "Textil como lienzo."),
    el("p", { class: "heroBg__text" }, "Piezas artesanales inspiradas en obra pictórica, hechas con mimo y calma."),
    el("div", { class: "heroBg__cta" }, [
      el("a", { class: "btnHero", href: "#/piezas" }, "Descubrir"),
      el("a", { class: "btnHero btnHero--ghost", href: "#/brand" }, "About")
    ])
  ])
]);


  const curated = el("section", { class: "section" }, [
    el("div", { class: "container" }, [
      el("div", { class: "section__head" }, [
        el("h2", { class: "section__title" }, "Selección curada"),
        el("p", { class: "muted" }, "Una mirada rápida a la colección.")
      ]),
      ProductGrid(products),
      el("div", { class: "section__foot" }, [
        el("a", { class: "btn btn--ghost", href: "#/piezas" }, "Ver todas las piezas")
      ])
    ])
  ]);

  const editorial = el("section", { class: "section" }, [
    el("div", { class: "container" }, [
      el("div", { class: "editorial" }, [
        editorialCard(
          "Colección",
          "Explora piezas con variaciones sutiles y estética orgánica.",
          heroImg,
          "#/piezas",
          "Explorar"
        ),
        editorialCard(
          "Brand",
          "Arte aplicado al textil. Producción pequeña y tiempos humanos.",
          products[1]?.images?.[0] || heroImg,
          "#/brand",
          "Conocer"
        )
      ])
    ])
  ]);

  return el("div", {}, [topNote, hero, curated, editorial]);
}

function editorialCard(title, text, imgSrc, href, cta) {
  return el("article", { class: "edcard" }, [
    el("div", { class: "edcard__media" }, [
      el("img", { src: imgSrc, alt: title, loading: "lazy" })
    ]),
    el("div", { class: "edcard__body" }, [
      el("h3", { class: "edcard__title" }, title),
      el("p", { class: "muted edcard__text" }, text),
      el("a", { class: "btn btn--ghost", href }, cta)
    ])
  ]);
}

