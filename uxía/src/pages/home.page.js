import { el } from "../utils/dom.js";
import { HeroCarousel } from "../components/sections/HeroCarousel.js";
import { LaunchBlocks } from "../components/sections/LaunchBlocks.js";

export function homePage() {
  const hero = HeroCarousel({
    images: [
      "/assets/flores1.jpeg",
      "/assets/flores2.jpeg",
      "/assets/flores3.jpeg"
    ],
    intervalMs: 3500
  });

  return el("div", {}, [
    hero,
    LaunchBlocks()
  ]);
}