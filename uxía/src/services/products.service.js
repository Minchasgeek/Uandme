import products from "../data/products.json";

export function getAllProducts() {
  return products;
}

export function getById(id) {
  return products.find(p => p.id === id) || null;
}

export function filterProducts({ section, category }) {
  return products.filter(p => {
    if (section && p.section !== section) return false;
    if (category && p.category !== category) return false;
    return true;
  });
}