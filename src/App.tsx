import React from "react";
import Home from "./pages/Hero";
import Nav from "./components/Nav";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollTopBtn from "./components/ScrollTopBtn";
import { ThemeProvider } from "./context/ThemContext";

function App() {
  return (
    <>
      <ThemeProvider>
        <Nav />
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
        <ScrollTopBtn />
      </ThemeProvider>
    </>
  );
}

export default App;
