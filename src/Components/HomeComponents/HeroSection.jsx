import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative text-white min-h-[60vh] flex items-center justify-center px-4 md:px-8 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1470&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-tr from-[#1e202b]/90 to-[#2b2d42]/90
 z-0"
      ></div>

      {/* Decorative floating circles - cooler color palette */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl space-y-8">
        <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Doller Sewa
          </span>
        </h1>
        <p className="text-lg md:text-xl font-extralight text-gray-300 mb-8 animate-fadeIn delay-150">
          Providing trusted, efficient, and dedicated services tailored to your
          needs for a better tomorrow.
        </p>
        <button
          className="inline-flex items-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg
                     transition duration-300 transform hover:scale-105 hover:shadow-2xl delay-100"
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

      {/* Inline styles for fade-in animation and floating animations */}
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
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        @keyframes floatSlow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes floatReverse {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(15px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .animate-floatReverse {
          animation: floatReverse 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
