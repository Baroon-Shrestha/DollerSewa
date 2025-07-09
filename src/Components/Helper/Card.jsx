import React from "react";

export default function Card({ image, title, description, price }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 border border-gray-200">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-blue-600 font-bold text-lg">${price}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
