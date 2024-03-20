import react from "react";

import { Toaster } from "react-hot-toast";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/navbar/Sidebar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#15181E] font-rubik !scroll-smooth">
      <Toaster />
      <div className="mx-auto min-w-[320px] max-w-[1440px]">
        <section id="Home" className="absolute xl:static w-full mx-auto">
          <Navbar />
        </section>
        <Sidebar />
        <Hero />
        <section id="About">
          <About />
        </section>
        <section id="Project">
          <Projects />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default App;
