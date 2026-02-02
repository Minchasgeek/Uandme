import "./styles/globals.css";
import { mountApp, renderRoute } from "./app/mount.js";
import { addRoute, startRouter } from "./app/router.js";

mountApp();

// Rutas (hash router)
addRoute(/^\/$/, "home");
addRoute(/^\/piezas$/, "pieces");
addRoute(/^\/pieza\/(?<id>[a-z0-9-]+)$/, "product");
addRoute(/^\/brand$/, "brand");

startRouter(renderRoute);

