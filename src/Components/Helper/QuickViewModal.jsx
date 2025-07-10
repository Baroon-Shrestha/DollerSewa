import React, { useRef, useEffect, useState } from "react";
import useExchangeRate from "../Hook/useExchangeRate";

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  currency = "USD",
}) {
  const modalRef = useRef();
  const [activeTab, setActiveTab] = useState("monthly");
  const { rate, loading } = useExchangeRate("USD", "NPR");

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const convertPrice = (price) => {
    if (currency === "USD") return `$${price}`;
    if (loading || !rate) return "Loading...";
    return `रु ${(price * rate).toFixed(0)}`;
  };

  const monthlyPrice = product.monthlyPrice || product.price;
  const yearlyPrice = product.yearlyPrice || monthlyPrice * 10; // 2 months free
  const yearlySavings = monthlyPrice * 2;

  const selectedPrice = activeTab === "monthly" ? monthlyPrice : yearlyPrice;

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      selectedPlan: activeTab,
      price: selectedPrice,
      currency,
    };
    onAddToCart?.(itemToAdd);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.90), rgba(0, 0, 0, 0.80))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        ref={modalRef}
        className="bg-gray-800 max-w-4xl w-full rounded-2xl shadow-2xl relative max-h-[90vh] overflow-y-auto border border-gray-700"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center transition-colors shadow-lg border border-gray-600"
        >
          <svg
            className="w-6 h-6 text-gray-300"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Grid */}
        <div className="grid md:grid-cols-2">
          {/* Left */}
          <div className="bg-gradient-to-br from-slate-600 to-slate-800 p-8 flex flex-col justify-center">
            <div className="text-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-6"
              />
              <h2 className="text-3xl font-bold text-blue-400 mb-4">
                {product.title}
              </h2>
              <div className="flex gap-2 justify-center flex-wrap">
                <span className="px-3 py-1 bg-slate-700 text-blue-300 text-xs font-semibold rounded-full border border-slate-600">
                  {product.maxPersons}{" "}
                  {product.maxPersons === 1 ? "PERSON" : "PERSONS"} MAX
                </span>
                <span className="px-3 py-1 bg-slate-700 text-blue-300 text-xs font-semibold rounded-full border border-slate-600">
                  {product.subscriptionType || "PREMIUM"}
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="p-8 flex flex-col">
            {/* Description */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                Description
              </h3>
              <p className="text-blue-200 leading-relaxed mb-4">
                {product.longDesc || product.description}
              </p>

              {product.features && (
                <>
                  <h4 className="font-medium text-blue-400 mb-3">
                    What's included:
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <svg
                          className="w-4 h-4 text-blue-500 mt-0.5"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-blue-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Tabs */}
            <div className="mb-6">
              <div className="flex bg-gray-700 rounded-lg p-1 mb-4 border border-gray-600">
                {["monthly", "yearly"].map((plan) => (
                  <button
                    key={plan}
                    onClick={() => setActiveTab(plan)}
                    className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                      activeTab === plan
                        ? "bg-blue-600 text-white shadow-sm"
                        : "text-blue-300 hover:text-blue-200"
                    }`}
                  >
                    {plan === "monthly" ? "Monthly" : "Yearly"}
                    <br />
                    {plan === "yearly" && (
                      <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                        Save
                        {currency === "USD"
                          ? `$${yearlySavings}`
                          : `रु ${(yearlySavings * rate).toFixed(0)}`}
                      </span>
                    )}
                  </button>
                ))}
              </div>

              {/* Price Display */}
              <div className="text-center fle p-4 bg-gray-700 rounded-lg border border-gray-600">
                <div className="text-4xl font-bold text-blue-400 mb-1">
                  {convertPrice(selectedPrice)}
                </div>
                <div className="text-blue-300 text-sm ">
                  per {activeTab}
                  {activeTab === "yearly" && (
                    <span className="ml-2 text-green-400 font-medium">
                      ({convertPrice((selectedPrice / 12).toFixed(2))}/month)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-auto">
              <button
                onClick={handleAddToCart}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl border border-blue-400"
              >
                Add to Cart
              </button>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg font-medium transition-colors border border-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
