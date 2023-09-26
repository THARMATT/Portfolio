import Email from "@/components/Email";
import Socialicons from "@/components/Socialicons";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import React from "react";

function Index() {
  return (
    <div className="App">
      <Navbar />

      <Socialicons />
      <Email />
      <main>
        {" "}
        <Hero />
        <About />
        <Experience />
        <Projects/>
        <Contact/>
      </main>
    </div>
  );
}

export default Index;
