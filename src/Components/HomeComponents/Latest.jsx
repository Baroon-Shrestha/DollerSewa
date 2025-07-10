import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "ChatGPT Access",
    description:
      "Get affordable monthly and yearly access to ChatGPT Plus in Nepal.",
    image: "/uploads/chatgpt.jpg",
  },
  {
    id: 2,
    name: "Canva Pro Subscription",
    description:
      "Unlock premium design tools with Canva Pro at the best rates.",
    image: "/uploads/canva.webp",
  },
  {
    id: 3,
    name: "Netflix Premium",
    description:
      "Enjoy the latest shows and movies with a verified Netflix subscription.",
    image: "/uploads/Netflix.jpg",
  },
];

export default function Latest() {
  return (
    <section className="mx-6 py-20 rounded-4xl bg-gradient-to-br from-slate-600/70 via-blue-900/60 to-indigo-950/50 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title and subtitle */}
        <div className="flex items-center justify-center gap-3 flex-col mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Popular{" "}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  text-transparent bg-clip-text">
              Services
            </span>
          </h2>
          <p className="max-w-3xl font-extralight text-base md:text-lg text-center text-gray-100">
            Helping you buy international digital services at affordable prices
            in Nepal.
          </p>
        </div>

        {/* Cards */}
        <div className="flex justify-center items-end gap-8 flex-wrap">
          {products.map(({ id, name, description, image }) => (
            <div
              key={id}
              className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-md border border-white/20 max-w-xs w-full"
            >
              <img
                src={image}
                alt={name}
                className="rounded-md w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-bold text-blue-600 mb-2">{name}</h3>
              <p className="text-gray-700 text-sm">{description}</p>
            </div>
          ))}
        </div>
        <div className="my-10">
          <Link to="/products">
            <button className="px-8 py-3 text-base md:text-xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white rounded-2xl">
              Check out our services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
