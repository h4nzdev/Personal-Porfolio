import { useEffect, useState } from "react";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      {isLoading ? (
        <div className="w-full h-screen bg-slate-900 flex flex-col items-center justify-center">
          <div className="border-4 border-slate-300 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
          <h2 className="text-6xl font-bold text-blue-400 animate-pulse">HM</h2>
        </div>
      ) : (
        <>
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Achievements />
          <Contact />
        </>
      )}
    </div>
  );
};

export default App;
