import { el } from "../../utils/dom.js";

export function HeroCarousel({ images = [], intervalMs = 3500 }) {
  if (!images.length) return el("section", { class: "car" });

  let idx = 0;
  const slides = images.map((src, i) =>
    el("div", { class: `car__slide ${i === 0 ? "is-active" : ""}` }, [
      el("img", { src, alt: `Campaña ${i + 1}`, loading: i === 0 ? "eager" : "lazy" })
    ])
  );

  const root = el("section", { class: "car" }, [
    el("div", { class: "car__track" }, slides)
  ]);

  const timer = setInterval(() => {
    slides[idx].classList.remove("is-active");
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add("is-active");
  }, intervalMs);

  window.addEventListener("hashchange", () => clearInterval(timer), { once: true });

  return root;
}