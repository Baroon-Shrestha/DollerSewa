import React from "react";

export default function Card({
  image,
  title,
  description,
  price,
  subscriptionType, // "monthly" or "yearly"
  maxPersons,
  onClick,
  onAdd,
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 cursor-pointer max-w-sm mx-auto"
    >
      {/* Image with gradient background */}
      <div className="bg-gradient-to-br from-[#00C4CC] to-[#5D4FFF]  relative">
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-contain drop-shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h3 className="text-xl font-semibold text-center text-gray-800">
          {title}
        </h3>

        {/* Subscription badges */}
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full uppercase">
            {subscriptionType}
          </span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
            Up to {maxPersons} {maxPersons === 1 ? "User" : "Users"}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>

        {/* Price and Add button */}
        <div className="pt-2">
          <div className="flex justify-between items-center">
            <div className="flex text-left flex-col">
              <span className="text-xs text-gray-500 uppercase">
                Staring from
              </span>
              <div className="text-xl font-bold text-gray-800">${price}</div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent modal from opening
                onAdd();
              }}
              className="bg-gradient-to-br from-[#00C4CC] to-[#5D4FFF] hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition-colors"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
