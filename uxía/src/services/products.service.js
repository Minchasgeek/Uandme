import products from "../data/products.json";

export function getAllProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((p) => p.id === id) || null;
}

export function getCategories() {
  const set = new Set(products.map((p) => p.category));
  return ["Todos", ...Array.from(set)];
}

export function filterByCategory(category) {
  if (!category || category === "Todos") return products;
  return products.filter((p) => p.category === category);
}
