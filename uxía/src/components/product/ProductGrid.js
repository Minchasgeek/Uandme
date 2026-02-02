import { el } from "../../utils/dom.js";
import { ProductCard } from "./ProductCard.js";

export function ProductGrid(products) {
  return el("section", { class: "grid" }, products.map(ProductCard));
}
