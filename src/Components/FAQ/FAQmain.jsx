import React from "react";
import Hero from "../Helper/Helper.Hero";
import FAQQues from "./FAQQues";

export default function FAQmain() {
  return (
    <div className="bg-gradient-to-r from-[#1a1f34] via-[#0a0c17] to-[#1a1f34] text-white">
      <Hero
        title="Frequently Asked Questions (FAQ's)"
        subtitle="Find answers to common queries about our services, payment methods, and how we help you access global platforms hassle-free."
      />
      <FAQQues />
    </div>
  );
}
