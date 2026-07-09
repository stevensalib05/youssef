import fs from "node:fs";
import path from "node:path";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// The portrait is not available yet — once a photo is dropped at
// public/images/portrait.jpg (or .png / .webp), it replaces the placeholder.
function findPortrait(): string | null {
  for (const ext of ["jpg", "jpeg", "png", "webp"]) {
    if (fs.existsSync(path.join(process.cwd(), "public", "images", `portrait.${ext}`))) {
      return `/images/portrait.${ext}`;
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
