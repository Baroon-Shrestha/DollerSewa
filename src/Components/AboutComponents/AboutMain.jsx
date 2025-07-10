import React from "react";
import AboutHero from "./AboutHero";
import Whyus from "./Whyus";
import FAQSection from "./FAQ";
import AimAndObjective from "./AimAndObjective";

export default function AboutMain() {
  return (
    <div className="bg-gradient-to-r from-[#1a1f34] via-[#0a0c17] to-[#1a1f34] text-white">
      <AboutHero />
      <AimAndObjective />

      <Whyus />
      <FAQSection />
    </div>
  );
}
