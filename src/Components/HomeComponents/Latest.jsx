import React from "react";

const products = [
  {
    id: 1,
    name: "Fast Remittance",
    description: "Quick and secure money transfer services to your loved ones.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Bill Payments",
    description: "Pay utility, internet, and other bills with ease.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Mobile Top-Up",
    description: "Instant mobile recharge across all major networks.",
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80",
  },
];

export default function Latest() {
  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-gray-900">
          Latest <span className="text-[#D1863C]">Services</span>
        </h2>

        {/* Cards container */}
        <div className="flex justify-center gap-8 flex-wrap">
          {products.map(({ id, name, description, image }) => (
            <div
              key={id}
              className="bg-gray-100 p-6 rounded-xl shadow-md cursor-pointer
                transform transition duration-300 ease-in-out
                hover:shadow-2xl hover:scale-105 max-w-xs w-full"
            >
              <img
                src={image}
                alt={name}
                className="rounded-md w-full h-56 object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-[#D1863C] mb-2">{name}</h3>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
