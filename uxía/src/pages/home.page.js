import { el } from "../utils/dom.js";
import { HeroCarousel } from "../components/sections/HeroCarousel.js";
import { LaunchBlocks } from "../components/sections/LaunchBlocks.js";

export function homePage() {
  const hero = HeroCarousel({
    images: [
    "/assets/inicio.01.jpeg",
    "/assets/inicio.02.jpeg",
    "/assets/inicio.03.jpeg",
    "/assets/inicio.04.jpeg",
    "/assets/inicio.05.jpeg",
    "/assets/inicio.06.jpeg"
  ],
    intervalMs: 3500
  });

  return el("div", {}, [
    hero,
    LaunchBlocks()
  ]);
}