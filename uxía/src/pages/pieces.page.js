import { el } from "../utils/dom.js";
import { filterProducts } from "../services/products.service.js";
import { ProductGrid } from "../components/product/ProductGrid.js";

function parseQueryFromHash() {
  const hash = location.hash;
  const qIndex = hash.indexOf("?");
  if (qIndex === -1) return { section: "", category: "" };

  const qs = new URLSearchParams(hash.slice(qIndex + 1));
  return {
    section: (qs.get("section") || "").toUpperCase(),
    category: (qs.get("cat") || "").toUpperCase()
  };
}

export function piecesPage() {
  const { section, category } = parseQueryFromHash();
  const list = filterProducts({
    section: section || null,
    category: category || null
  });

  const title = category || "PIEZAS";
  const subtitle = [section, category].filter(Boolean).join(" · ");

  return el("div", { class: "page container" }, [
    el("div", { class: "page__head" }, [
      el("h1", { class: "h1" }, title),
      el("p", { class: "muted" }, subtitle || "VESTIR / HABITAR")
    ]),
    ProductGrid(list)
  ]);
}
