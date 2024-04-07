import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar />
        <div className="container mx-auto px-12 py-12">
          <HeroSection />
        </div>
      </main>
    </>
  );
}

export default App;
