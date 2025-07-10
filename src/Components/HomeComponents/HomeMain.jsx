import React from "react";
import HeroSection from "./HeroSection";
import WhoAreWe from "./WhoAreWe";
import Latest from "./Latest";
import Why from "./Why";

export default function HomeMain() {
  return (
    <div className="bg-gradient-to-r from-[#1a1f34] via-[#0a0c17] to-[#1a1f34] text-white">
      <HeroSection />
      <WhoAreWe />
      <Latest />
      <Why />
    </div>
  );
}
