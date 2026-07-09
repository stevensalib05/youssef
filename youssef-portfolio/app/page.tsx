import fs from "node:fs";
import path from "node:path";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// Drop a portrait photo in public/images (named "Youssef" or "portrait",
// as .jpg / .jpeg / .png / .webp) and it replaces the placeholder automatically.
function findPortrait(): string | null {
  for (const name of ["Youssef", "portrait"]) {
    for (const ext of ["jpg", "jpeg", "png", "webp"]) {
      if (fs.existsSync(path.join(process.cwd(), "public", "images", `${name}.${ext}`))) {
        return `/images/${name}.${ext}`;
      }
    }
  }
  return null;
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About portraitSrc={findPortrait()} />
      <Expertise />
      <Projects />
      <Contact />
    </main>
  );
}
