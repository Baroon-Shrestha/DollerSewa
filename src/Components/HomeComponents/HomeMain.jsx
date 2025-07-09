import React from "react";
import HeroSection from "./HeroSection";
import WhoAreWe from "./WhoAreWe";
import Latest from "./Latest";
import Why from "./Why";

export default function HomeMain() {
  return (
    <div>
      <HeroSection />
      <WhoAreWe />
      <Latest />
      <Why />
    </div>
  );
}
