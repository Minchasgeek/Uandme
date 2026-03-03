import { el } from "../../utils/dom.js";

export function Footer() {
  const blocks = el("div", { class: "ftr__left" }, [
    FooterAccordion(
      "ESCRÍBENOS",
      "Si tienes cualquier duda sobre una pieza, su disponibilidad o el proceso de compra, estaremos encantadas de leerte por mensaje en redes o a través del siguiente correo:",
      [
        el(
          "a",
          {
            class: "ftr__mail",
            href: "mailto:hello.uandmestudio@gmail.com"
          },
          "hello.uandmestudio@gmail.com"
        )
      ]
    ),

    FooterAccordion(
      "CÓMO COMPRAR",
      "Por el momento, las compras se gestionan a través de mensaje directo en Instagram.",
      [
        el(
          "p",
          { class: "ftr__text" },
          "Si estás interesada en una pieza, indícanos el nombre del producto y te confirmaremos disponibilidad y detalles de pago."
        ),
        el(
          "p",
          { class: "ftr__text" },
          "En el caso de piezas únicas —como bolsos u obras originales— la venta se asignará a la primera persona que contacte."
        ),
        el(
          "p",
          { class: "ftr__text" },
          "La pieza quedará reservada únicamente una vez recibido el pago."
        )
      ]
    ),

    FooterAccordion(
      "ENVÍOS",
      "Los pedidos se preparan cuidadosamente y se envían en un plazo aproximado de 3 a 5 días laborables desde la confirmación del pago.",
      [
        el("p", { class: "ftr__text" }, "Entrega gratuita en Vigo y Pontevedra."),
        el("p", { class: "ftr__text" }, "Envío estandar: 5,90 €"),
        el(
          "p",
          { class: "ftr__text" },
          "Para piezas de gran formato el coste se calculará de manera personalizada según destino y dimensiones."
        )
      ]
    ),

    FooterAccordion(
      "PIEZAS ÚNICAS",
      "Muchas de nuestras creaciones son ediciones limitadas o piezas únicas, hechas a mano desde nuestro pequeño taller.",
      [
        el(
          "p",
          { class: "ftr__text" },
          "Pequeñas variaciones, imperfecciones, trazos o matices forman parte de su carácter y autenticidad."
        ),
        el(
          "p",
          { class: "ftr__text" },
          "Cada pieza es ligeramente distinta y eso es precisamente lo que la hace especial, no habrá otra igual."
        )
      ]
    ),

    FooterAccordion(
      "DEVOLUCIONES",
      "Debido a la naturaleza limitada y exclusiva de las piezas, no se admiten devoluciones.",
      [
        el(
          "p",
          { class: "ftr__text" },
          "Si tu pedido presenta algún desperfecto o incidencia durante el envío, escríbenos."
        )
      ]
    )
  ]);

  // ✅ Pon aquí los enlaces reales
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

function FooterAccordion(title, leadText, extraNodes = []) {
  let pinned = false;

  const content = el("div", { class: "ftrA__content" }, [
    el("p", { class: "ftr__text" }, leadText),
    ...extraNodes
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

  wrapper.addEventListener("mouseenter", () => wrapper.classList.add("is-hover"));
  wrapper.addEventListener("mouseleave", () => wrapper.classList.remove("is-hover"));

  return wrapper;
}