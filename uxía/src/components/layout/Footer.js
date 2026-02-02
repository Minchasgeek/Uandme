import { el } from "../../utils/dom.js";

export function Footer() {
  return el("footer", { class: "footer" }, [
    el("div", { class: "container footer__inner" }, [
      el("p", { class: "muted" }, "© U&me Studio"),
      el("div", { class: "footer__links" }, [
        el("a", { href: "https://instagram.com", target: "_blank", rel: "noreferrer" }, "Instagram"),
        el("a", { href: "mailto:hello@uandme.studio" }, "Email")
      ])
    ])
  ]);
}
