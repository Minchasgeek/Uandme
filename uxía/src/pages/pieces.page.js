import { el } from "../utils/dom.js";
import { filterProducts } from "../services/products.service.js";
import { ProductGrid } from "../components/product/ProductGrid.js";

function arcLongNumber(name) {
  const m = String(name || "").match(/ARC\s+LONG\s+(\d+)/i);
  return m ? parseInt(m[1], 10) : -1;
}

function parseQueryFromHash() {
  const hash = location.hash;
  const qIndex = hash.indexOf("?");
  if (qIndex === -1) return { section: "", category: "", page: 1 };

  const qs = new URLSearchParams(hash.slice(qIndex + 1));
  return {
    section: (qs.get("section") || "").toUpperCase(),
    category: (qs.get("cat") || "").toUpperCase(),
    page: parseInt(qs.get("page") || "1", 10)
  };
}

export function piecesPage() {
  const { section, category, page } = parseQueryFromHash();

  const list = filterProducts({
    section: section || null,
    category: category || null
  });

  // Orden descendente ARC LONG 013 -> ... -> 001
  list.sort((a, b) => arcLongNumber(b.name) - arcLongNumber(a.name));

  // Paginación
  const pageSize = 7;
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  const currentPage = Math.min(Math.max(page, 1), totalPages);

  const start = (currentPage - 1) * pageSize;
  const pageItems = list.slice(start, start + pageSize);

  const title = category || "PIEZAS";
  const subtitle = [section, category].filter(Boolean).join(" · ");

  // Construir links del paginador manteniendo section/cat
  const baseParams = new URLSearchParams();
  if (section) baseParams.set("section", section);
  if (category) baseParams.set("cat", category);

  function pageHref(n) {
    const p = new URLSearchParams(baseParams);
    p.set("page", String(n));
    return `#/piezas?${p.toString()}`;
  }

  const pager =
    totalPages > 1
      ? el("div", { class: "pager" }, [
          currentPage > 1
            ? el("a", { class: "pager__btn", href: pageHref(currentPage - 1) }, "Anterior")
            : el("span", { class: "pager__btn pager__btn--disabled" }, "Anterior"),

          el("span", { class: "pager__info muted" }, `${currentPage} / ${totalPages}`),

          currentPage < totalPages
            ? el("a", { class: "pager__btn", href: pageHref(currentPage + 1) }, "Siguiente")
            : el("span", { class: "pager__btn pager__btn--disabled" }, "Siguiente")
        ])
      : null;

  return el("div", { class: "page container" }, [
    el("div", { class: "page__head" }, [
      el("h1", { class: "h1" }, title),
      el("p", { class: "muted" }, subtitle || "VESTIR / HABITAR")
    ]),
    ProductGrid(pageItems),
    pager
  ]);
}