import { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <div className="container mx-auto px-12 py-4">
          <HeroSection />
        </div>
      </main>
    </>
  );
}

export default App;
