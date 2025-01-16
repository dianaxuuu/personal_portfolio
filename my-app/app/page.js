'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Specialities from "./components/Specialities";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Specialities />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
