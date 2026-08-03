import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import FooterCTA from "./components/FooterCTA";

export default function App() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Projects />
      <FooterCTA />
    </div>
  );
}
export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Hello, I am Hassan Ahmed</h1>
        <p className="mt-4 text-lg text-gray-600">
          This is for Assignment Week 4 of the AI Fluency Track.
        </p>
      </div>
    </main>
  );
}

