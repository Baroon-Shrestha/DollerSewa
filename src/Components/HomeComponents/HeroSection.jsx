import React from "react";

export default function HeroSection() {
  return (
    <section
      style={{ backgroundColor: "#0f172c" }}
      className="relative text-white min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden"
    >
      <div className="relative text-center max-w-3xl space-y-8">
        <h1
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 
                     transition-transform duration-300 hover:scale-105 hover:text-[#D1863C] animate-fadeIn"
        >
          Welcome to Dolleer Sewa
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 animate-fadeIn delay-150">
          Providing trusted, efficient, and dedicated services tailored to your needs for a better tomorrow.
        </p>
        <button
          className="inline-flex items-center bg-[#D1863C] hover:bg-[#b96c22] text-white font-semibold py-3 px-6 rounded-lg shadow-lg
                     transition duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#D1863C]/50 animate-fadeIn delay-300"
          aria-label="Get Started"
        >
          Get Started
          <svg
            className="ml-3 w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      {/* Inline styles for fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}
