import React, { useState, useEffect } from "react";

export default function CurrencySwitcher({ onChange }) {
  const [currency, setCurrency] = useState("USD");

  useEffect(() => {
    const savedCurrency = localStorage.getItem("currency") || "USD";
    setCurrency(savedCurrency);
    if (onChange) onChange(savedCurrency);
  }, []);

  const toggleCurrency = () => {
    const newCurrency = currency === "USD" ? "NPR" : "USD";
    setCurrency(newCurrency);
    localStorage.setItem("currency", newCurrency);
    if (onChange) onChange(newCurrency);
  };

  const currencyDetails = {
    USD: { label: "USD", symbol: "$", country: "🇺🇸", full: "US Dollar" },
    NPR: { label: "NPR", symbol: "रु", country: "🇳🇵", full: "Nepali Rupee" },
  };

  const current = currencyDetails[currency];

  return (
    <div className="">
      <button
        onClick={toggleCurrency}
        aria-label={`Switch to ${currency === "USD" ? "NPR" : "USD"}`}
        title={`Switch to ${currency === "USD" ? "NPR" : "USD"}`}
        className="group flex items-center gap-2 md:gap-4 px-6 py-1  text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none active:scale-95 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600"
      >
        <span className="text-xl group-hover:scale-110 transition-transform duration-200">
          {current.country}
        </span>
        <div className="flex flex-col items-start">
          <span className="font-medium text-sm">{current.label}</span>
          <span className="text-xs">{current.full}</span>
        </div>
        <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
          <svg
            className="w-3 h-3 text-blue-400 transition-transform duration-200 group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
