import { el } from "../utils/dom.js";
import { getCategories, filterByCategory } from "../services/products.service.js";
import { ProductGrid } from "../components/product/ProductGrid.js";
import { clear } from "../utils/dom.js";

export function piecesPage() {
  const categories = getCategories();
  let current = "Todos";

  const title = el("div", { class: "section__head" }, [
    el("h1", { class: "section__title" }, "Piezas"),
    el("p", { class: "muted" }, "Catálogo visual. Sin pagos por ahora: contacto/encargo más adelante.")
  ]);

  const pills = el(
    "div",
    { class: "pills" },
    categories.map((c) =>
      el("button", {
        class: `pill ${c === current ? "pill--active" : ""}`,
        type: "button",
        onClick: () => {
          current = c;
          // actualizar UI
          for (const btn of pills.querySelectorAll(".pill")) {
            btn.classList.toggle("pill--active", btn.textContent === current);
          }
          // re-render grid
          clear(gridWrap);
          gridWrap.append(ProductGrid(filterByCategory(current)));
        }
      }, c)
    )
  );

  const gridWrap = el("div", { class: "section" }, [
    ProductGrid(filterByCategory(current))
  ]);

  return el("div", { class: "container page" }, [title, pills, gridWrap]);
}
