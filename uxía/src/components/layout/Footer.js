import { el } from "../../utils/dom.js";

export function Footer() {
  const blocks = el("div", { class: "ftr__left" }, [
    FooterAccordion(
      "ESCRÍBENOS",
      "Si tienes cualquier duda sobre una pieza, su disponibilidad o el proceso de compra, estaremos encantadas de leerte."
    ),
    FooterAccordion(
      "CÓMO COMPRAR",
      "Por el momento, las compras se gestionan por mensaje directo en Instagram. Indica el nombre del producto y te confirmaremos disponibilidad y pago."
    ),
    FooterAccordion(
      "ENVÍOS",
      "Envío aprox. 3–5 días laborables. Península y Baleares: 5,90 €. Canarias y Europa: 9,90 €. Entrega gratuita en Vigo y Pontevedra."
    ),
    FooterAccordion(
      "PIEZAS ÚNICAS",
      "Ediciones limitadas o piezas únicas hechas a mano. Variaciones y matices forman parte de su carácter."
    ),
    FooterAccordion(
      "DEVOLUCIONES",
      "No se admiten devoluciones por la naturaleza limitada. Si hay incidencia, escríbenos y lo resolvemos."
    )
  ]);

  // ✅ Cambia estos enlaces por los reales de la marca
  const instagramUrl = "https://instagram.com/uandme__studio";
  const tiktokUrl = "https://www.tiktok.com/@uandme__studio";

  const socials = el("div", { class: "ftr__right" }, [
    el("a", { class: "ftr__social", href: instagramUrl, target: "_blank", rel: "noreferrer" }, "Instagram"),
    el("a", { class: "ftr__social", href: tiktokUrl, target: "_blank", rel: "noreferrer" }, "TikTok")
  ]);

  return el("footer", { class: "ftr" }, [
    el("div", { class: "ftr__inner" }, [blocks, socials])
  ]);
}

function FooterAccordion(title, text) {
  let pinned = false;

  const content = el("div", { class: "ftrA__content" }, [
    el("p", { class: "ftr__text" }, text)
  ]);

  const btn = el("button", {
    class: "ftrA__title",
    type: "button",
    "aria-expanded": "false",
    onClick: () => {
      pinned = !pinned;
      wrapper.classList.toggle("is-pinned", pinned);
      btn.setAttribute("aria-expanded", String(pinned));
    }
  }, title);

  const wrapper = el("section", { class: "ftr__block ftrA" }, [btn, content]);

  // hover: abre mientras estás encima, pero sin “pin”
  wrapper.addEventListener("mouseenter", () => {
    wrapper.classList.add("is-hover");
  });
  wrapper.addEventListener("mouseleave", () => {
    wrapper.classList.remove("is-hover");
  });

  return wrapper;
}