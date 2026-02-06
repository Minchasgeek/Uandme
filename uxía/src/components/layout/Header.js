import { el } from "../../utils/dom.js";

export function Header() {
  // Logo centrado
  const logoImg = el("img", {
  src: "/assets/Uandmelogo.jpeg",
  class: "header2__logo-img"
});

const logo = el("a", { class: "header2__logo", href: "#/" }, logoImg);


  // Menú izquierda (con dropdown)
  const navLeft = el("nav", { class: "header2__nav" }, [
    NavItemWithDropdown("Bolsos", [
      { label: "Todos los bolsos", href: "#/piezas?cat=Bolsos" },
      { label: "Colección · Sacco", href: "#/piezas?col=sacco" },
      { label: "Edición limitada", href: "#/piezas?tag=limited" }
    ]),
    NavItemWithDropdown("Pañuelos", [
      { label: "Todos los pañuelos", href: "#/piezas?cat=Pañuelos" },
      { label: "Colección · Niebla", href: "#/piezas?col=niebla" },
      { label: "Nuevos", href: "#/piezas?tag=new" }
    ]),
    NavItemSimple("About", "#/brand")
  ]);

  // Acciones derecha (de momento “fake”, solo UI)
  const right = el("div", { class: "header2__right" }, [
    el("a", { class: "header2__tiny", href: "#/", title: "Idioma" }, "ES"),
    el("a", { class: "header2__tiny", href: "#/", title: "Moneda" }, "EUR €"),
    el("div", { class: "header2__icons" }, [
      IconCircle("👤", "Cuenta"),
      IconCircle("👜", "Bolsa")
    ])
  ]);

  return el("header", { class: "header2" }, [
    el("div", { class: "header2__inner" }, [
      navLeft,
      logo,
      right
    ])
  ]);
}

function NavItemSimple(text, href) {
  return el("a", { class: "nav2__link", href }, text);
}

function NavItemWithDropdown(text, items) {
  // contenedor que activa el dropdown con CSS :hover
  const trigger = el("span", { class: "nav2__link nav2__trigger", tabIndex: 0 }, text);

  const dropdown = el("div", { class: "nav2__dropdown" }, [
    el("div", { class: "nav2__dropdown-inner" }, [
      el("div", { class: "nav2__col" }, [
        el("p", { class: "nav2__title" }, text),
        el("p", { class: "nav2__desc" }, "Explora categorías, colecciones y ediciones.")
      ]),
      el("div", { class: "nav2__col" }, [
        el("ul", { class: "nav2__list" },
          items.map(i => el("li", {}, el("a", { class: "nav2__item", href: i.href }, i.label)))
        )
      ])
    ])
  ]);

  return el("div", { class: "nav2__itemwrap" }, [trigger, dropdown]);
}

function IconCircle(char, label) {
  return el("a", { class: "iconbtn", href: "#/", title: label, "aria-label": label }, char);
}

