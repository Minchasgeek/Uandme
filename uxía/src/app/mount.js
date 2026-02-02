import { qs, clear } from "../utils/dom.js";
import { Header } from "../components/layout/Header.js";
import { Footer } from "../components/layout/Footer.js";

import { homePage } from "../pages/home.page.js";
import { piecesPage } from "../pages/pieces.page.js";
import { productPage } from "../pages/product.page.js";
import { brandPage } from "../pages/brand.page.js";
import { notFoundPage } from "../pages/notfound.page.js";

const pages = {
  home: homePage,
  pieces: piecesPage,
  product: productPage,
  brand: brandPage,
  notfound: notFoundPage,
};

export function mountApp() {
  const root = qs("#app");
  clear(root);

  const header = Header();
  const view = document.createElement("main");
  view.id = "view";
  const footer = Footer();

  root.append(header, view, footer);
}

export function renderRoute({ name, params }) {
  const view = qs("#view");
  clear(view);

  const pageFn = pages[name] || pages.notfound;
  view.append(pageFn(params));
}
