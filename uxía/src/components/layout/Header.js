import { el } from "../../utils/dom.js";

export function Header() {
  const logoImg = el("img", {
    src: "/assets/Uandmelogo.jpeg",
    alt: "U&me Studio",
    class: "logo__img"
  });

  const logo = el("a", { class: "logo", href: "#/" }, logoImg);

  const nav = el("nav", { class: "nav" }, [
    el("a", { href: "#/piezas", class: "nav__link" }, "Piezas"),
    el("a", { href: "#/brand", class: "nav__link" }, "Brand")
  ]);

  return el("header", { class: "header" }, [
    el("div", { class: "container header__inner" }, [logo, nav])
  ]);
}
