import React, { useState } from "react";
import useExchangeRate from "../Hook/useExchangeRate";

export default function Card({
  image,
  title,
  description,
  price,
  subscriptionType,
  maxPersons,
  onClick,
  onAdd,
  currency,
}) {
  const { rate, loading } = useExchangeRate("USD", "NPR");

  const convertPrice = (priceInUSD) => {
    if (currency === "USD") return `$${priceInUSD}`;
    if (loading) return "Loading...";
    const newRate = (priceInUSD * rate).toFixed(0);
    return `NRs ${newRate}`;
  };

  return (
    <div
      onClick={onClick}
      className="group rounded-2xl overflow-hidden shadow-2xl cursor-pointer max-w-sm w-full h-full flex flex-col border border-slate-600 bg-gray-800 ransition transform hover:scale-105 hover:shadow-blue-400/50 hover:brightness-110 duration-300"
    >
      {/* Image */}
      <div className="bg-gradient-to-br from-slate-600 to-slate-800 p-4">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-contain drop-shadow-2xl"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <h3 className="text-xl font-bold text-center text-blue-300 min-h-[8px]">
          {title}
        </h3>

        <div className="flex gap-2 justify-center my-3">
          <span className="px-4 py-2 bg-slate-600 text-blue-300 text-xs font-semibold rounded-full uppercase border border-slate-500">
            {subscriptionType}
          </span>
          <span className="px-4 py-2 bg-slate-600 text-blue-300 text-xs font-semibold rounded-full border border-slate-500">
            Up to {maxPersons} {maxPersons === 1 ? "User" : "Users"}
          </span>
        </div>

        <p className="text-blue-200 text-sm flex-grow leading-relaxed mb-4 min-h-[6px]">
          {description}
        </p>

        <div className="pt-2 mt-auto">
          <div className="flex justify-between items-center">
            <div className="text-left bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text">
              <span className="text-xs uppercase font-medium">
                Starting from
              </span>
              <div className="text-2xl font-bold">{convertPrice(price)}</div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onAdd();
              }}
              className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl text-sm font-semibold transition transform group:hover:scale-105  shadow-lg group-hover:shadow-blue-400/50 group-hover:brightness-110 "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
