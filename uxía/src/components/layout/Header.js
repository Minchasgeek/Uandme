import { el } from "../../utils/dom.js";

export function Header() {
  let menuOpen = false;

  const logo = el("a", { class: "hdr__logo", href: "#/" }, [
    el("img", { class: "hdr__logoImg", src: "/assets/Uandmelogo.jpeg", alt: "U&me Studio" })
  ]);

  const piecesBtn = el("button", {
    class: "hdr__link",
    type: "button",
    "aria-expanded": "false",
    onClick: () => toggleMenu()
  }, "PIEZAS");

  const studioLink = el("a", { class: "hdr__link", href: "#/studio" }, "STUDIO");

  const navLeft = el("nav", { class: "hdr__nav" }, [piecesBtn, studioLink]);

  const panel = el("aside", { class: "panel", "aria-hidden": "true" }, [
    el("div", { class: "panel__inner" }, [
      SectionBlock("VESTIR", [
        { label: "BOLSOS", href: "#/piezas?section=VESTIR&cat=BOLSOS" },
        { label: "PAÑUELOS", href: "#/piezas?section=VESTIR&cat=PAÑUELOS" }
      ]),
      SectionBlock("HABITAR", [
        { label: "ARTE", href: "#/piezas?section=HABITAR&cat=ARTE" }
      ])
    ])
  ]);

  const overlay = el("div", {
    class: "overlay",
    onClick: () => closeMenu()
  });

  const header = el("header", { class: "hdr" }, [
    el("div", { class: "hdr__inner" }, [
      navLeft,
      el("div", { class: "hdr__spacer" }, ""),
      logo
    ]),
    overlay,
    panel
  ]);

  function openMenu() {
    menuOpen = true;
    piecesBtn.setAttribute("aria-expanded", "true");
    overlay.classList.add("overlay--open");
    panel.classList.add("panel--open");
    panel.setAttribute("aria-hidden", "false");
  }
  function closeMenu() {
    menuOpen = false;
    piecesBtn.setAttribute("aria-expanded", "false");
    overlay.classList.remove("overlay--open");
    panel.classList.remove("panel--open");
    panel.setAttribute("aria-hidden", "true");
  }
  function toggleMenu() {
    if (menuOpen) closeMenu();
    else openMenu();
  }

  window.addEventListener("hashchange", () => closeMenu());

  return header;
}

function SectionBlock(title, links) {
  const section = el("section", { class: "panel__section" });

  const titleBtn = el("button", {
    class: "panel__title",
    type: "button",
    "aria-expanded": "false",
    onClick: () => {
      const open = section.classList.toggle("panel__section--open");
      titleBtn.setAttribute("aria-expanded", String(open));
    }
  }, title);

  const linksWrap = el("div", { class: "panel__links" },
    links.map(l => el("a", { class: "panel__link", href: l.href }, l.label))
  );

  section.append(titleBtn, linksWrap);
  return section;
}