import React, { useRef, useEffect, useState } from "react";

export default function QuickViewModal({ product, onClose }) {
  const modalRef = useRef();
  const [activeTab, setActiveTab] = useState("monthly");

  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Pricing data - you can pass this as props or fetch from product
  const pricingPlans = {
    monthly: {
      price: product.monthlyPrice || product.price,
      period: "month",
      savings: null,
    },
    yearly: {
      price: product.yearlyPrice || product.price * 10, // 2 months free
      period: "year",
      savings: product.price * 2, // 2 months savings
    },
  };

  const currentPlan = pricingPlans[activeTab];

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center px-4">
      <div
        ref={modalRef}
        className="bg-white max-w-3xl w-full rounded-2xl shadow-xl relative max-h-[90vh] overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors shadow-md"
        >
          <svg
            className="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left side - Image and Title */}
          <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-8 relative flex flex-col justify-center">
            <div className="text-center">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain drop-shadow-lg mb-6"
              />

              <h2 className="text-3xl font-bold text-white mb-4">
                {product.title}
              </h2>

              <div className="flex gap-2 justify-center">
                <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                  {product.maxPersons}{" "}
                  {product.maxPersons === 1 ? "PERSON" : "PERSONS"} MAX
                </span>
                <span className="px-3 py-1 bg-white/20 text-white text-xs font-medium rounded-full">
                  {product.category || "PREMIUM"}
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Description and Pricing */}
          <div className="p-8 flex flex-col">
            {/* Right side - Description and Pricing */}
            <div className="p-8 flex flex-col">
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Description
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {product.longDesc || product.description}
                </p>

                {/* Features */}
                {product.features && (
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-600 text-sm">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div className="flex bg-gray-100 rounded-lg p-1 mb-4">
                <button
                  onClick={() => setActiveTab("monthly")}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                    activeTab === "monthly"
                      ? "bg-white text-purple-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setActiveTab("yearly")}
                  className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors relative ${
                    activeTab === "yearly"
                      ? "bg-white text-purple-600 shadow-sm"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  Yearly
                  {pricingPlans.yearly.savings && (
                    <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      Save ${pricingPlans.yearly.savings}
                    </span>
                  )}
                </button>
              </div>

              {/* Price display */}
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-4xl font-bold text-gray-800 mb-1">
                  ${currentPlan.price}
                </div>
                <div className="text-gray-600 text-sm">
                  per {currentPlan.period}
                  {activeTab === "yearly" && pricingPlans.yearly.savings && (
                    <span className="ml-2 text-green-600 font-medium">
                      (${(currentPlan.price / 12).toFixed(2)}/month)
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Pricing tabs */}
            <div className="mb-6">
              {/* Action buttons */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    // Add to cart logic here with selected plan
                    console.log("Adding to cart:", {
                      ...product,
                      selectedPlan: activeTab,
                      price: currentPlan.price,
                    });
                    onClose();
                  }}
                  className="flex-1 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
