import React from "react";
import Card from "../Helper/Card";

const productDetails = [
  {
    id: 1,
    title: "ChatGPT",
    description:
      "ChatGPT 4.0 with monthly subscription starting at just USD 20/month. Supports multiple users and advanced AI capabilities.",
    image: "/uploads/netflix.png",
    price: 20,
  },
  {
    id: 2,
    title: "ChatGPT",
    description:
      "ChatGPT 4.0 with monthly subscription starting at just USD 20/month. Supports multiple users and advanced AI capabilities.",
    image: "/uploads/netflix.png",
    price: 20,
  },
  {
    id: 3,
    title: "ChatGPT",
    description:
      "ChatGPT 4.0 with monthly subscription starting at just USD 20/month. Supports multiple users and advanced AI capabilities.",
    image: "/uploads/netflix.png",
    price: 20,
  },
  // Add more products here if needed
];

export default function ProductCard() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {productDetails.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
