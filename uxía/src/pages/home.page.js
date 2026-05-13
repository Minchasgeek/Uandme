import { el } from "../utils/dom.js";
import { HeroCarousel } from "../components/sections/HeroCarousel.js";
import { LaunchBlocks } from "../components/sections/LaunchBlocks.js";

export function homePage() {
  const hero = HeroCarousel({
    images: [
    "/assets/inicio.01.jpg",
    "/assets/inicio.02.jpeg",
    "/assets/inicio.03.jpg",
    "/assets/inicio.04.jpg",
    "/assets/inicio.05.jpeg",
    "/assets/inicio.06.jpg"
  ],
    intervalMs: 3500
  });

  return el("div", {}, [
    hero,
    LaunchBlocks()
  ]);
}