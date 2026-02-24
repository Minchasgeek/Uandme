import { el } from "../../utils/dom.js";
import { ProductCard } from "./ProductCard.js";

export function ProductGrid(list) {
  return el("div", { class: "pgrid" }, list.map(ProductCard));
}