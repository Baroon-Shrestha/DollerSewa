import React, { useState } from "react";
import Hero from "../Helper/Helper.Hero";

// Reusable Hero Component
function HelperHero({ title, subtitle }) {
  return (
    <div className="space-y-6 text-center max-w-5xl mx-auto p-12">
      <h1 className="text-6xl font-bold text-white drop-shadow-md">{title}</h1>
      <p className="text-lg md:text-xl text-gray-200">{subtitle}</p>
    </div>
  );
}

// Accordion Item (neutral styling)

// Main About Page Component
export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="At Doller Sewa, we are dedicated to providing secure, fast, and user-friendly financial services. With a trusted team and a customer-first approach, we ensure convenience, transparency, and excellence in every transaction."
      />
    </>
  );
}
