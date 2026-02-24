import "./styles/globals.css";
import { mountApp, renderRoute } from "./app/mount.js";
import { addRoute, startRouter } from "./app/router.js";

mountApp();

addRoute(/^\/$/, "home");
addRoute(/^\/piezas$/, "pieces");
addRoute(/^\/studio$/, "studio");
addRoute(/^\/producto\/(?<id>[a-z0-9-]+)$/, "product");

startRouter(renderRoute);