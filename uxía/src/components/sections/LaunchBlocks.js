import { el } from "../../utils/dom.js";

export function LaunchBlocks() {
  return el("section", { class: "launch" }, [
    el("div", { class: "launch__inner" }, [
      LaunchBlock({
        side: "left",
        img: "/assets/bolsomodelo6.jpeg",
        href: "#/piezas?section=VESTIR&cat=BOLSOS"
      }),
      LaunchBlock({
        side: "right",
        img: "/assets/pañmodelo1.jpeg",
        href: "#/piezas?section=VESTIR&cat=PAÑUELOS"
      })
    ])
  ]);
}

function LaunchBlock({ side, img, href }) {
  const isLeft = side === "left";
  return el("article", { class: `launch__block ${isLeft ? "is-left" : "is-right"}` }, [
    el("div", { class: "launch__media" }, [
      el("img", { src: img, alt: "Lanzamiento", loading: "lazy" })
    ]),
    el("a", { class: `launch__cta ${isLeft ? "to-right" : "to-left"}`, href }, "Descubrir")
  ]);
}