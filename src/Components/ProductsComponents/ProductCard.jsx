import React, { useEffect, useState } from "react";
import Card from "../Helper/Card";
import QuickViewModal from "../Helper/QuickViewModal";

const productDetails = [
  {
    id: 1,
    title: "ChatGPT Plus",
    image: "/uploads/chatgpt.jpg",
    shortDesc: "AI subscription with GPT-4 access and enhanced performance.",
    subscriptionType: "Monthly",
    MaxPersons: 1,
    longDesc:
      "ChatGPT Plus gives you access to GPT-4o with 80 messages every 3 hours, faster response times, and priority access even during peak usage. Perfect for professionals, students, and businesses requiring advanced AI capabilities.",
    price: 20,
  },
  {
    id: 2,
    title: "Canva Pro",
    image: "/uploads/canva.webp",
    shortDesc: "Professional design tools with premium assets and AI features.",
    subscriptionType: "Monthly",
    MaxPersons: 1,
    longDesc:
      "Canva Pro offers unlimited premium templates, 100M+ stock photos, videos, audio tracks, background remover, brand kit, and Magic Resize. Perfect for content creators and small businesses.",
    price: 15,
  },
  {
    id: 3,
    title: "Netflix Standard",
    image: "uploads/Netflix.jpg",
    shortDesc: "Stream movies and TV shows in HD quality.",
    subscriptionType: "Monthly",
    MaxPersons: 2,
    longDesc:
      "Netflix Standard plan allows streaming on 2 devices simultaneously in HD quality. Access to Netflix's entire library of movies, series, and documentaries. Extra members can be added for $8.99/month.",
    price: 15.49,
  },
  {
    id: 4,
    title: "Spotify Premium",
    image: "uploads/spotify.png",
    shortDesc: "Ad-free music streaming with offline downloads.",
    subscriptionType: "Monthly",
    MaxPersons: 1,
    longDesc:
      "Spotify Premium Individual offers ad-free music streaming, unlimited skips, offline downloads, and high-quality audio. Access to 100+ million songs and exclusive podcasts.",
    price: 11.99,
  },
  {
    id: 5,
    title: "Amazon Prime",
    image: "/uploads/prime.jpg",
    shortDesc: "Fast shipping, Prime Video, and Prime Music included.",
    subscriptionType: "Monthly",
    MaxPersons: 1,
    longDesc:
      "Amazon Prime membership includes free same-day/next-day delivery, Prime Video streaming, Prime Music, Prime Reading, and exclusive deals. Note: Prime Video now has ads unless you pay extra $2.99/month.",
    price: 18.98,
  },
  {
    id: 6,
    title: "YouTube Premium",
    image: "/uploads/youtube.webp",
    shortDesc: "Ad-free YouTube, background play, and YouTube Music.",
    subscriptionType: "Monthly",
    MaxPersons: 1,
    longDesc:
      "YouTube Premium removes ads from all videos, allows background play and offline downloads, includes YouTube Music Premium, and access to YouTube Originals. Family plan available for up to 6 members.",
    price: 13.99,
  },
  {
    id: 7,
    title: "Netflix Premium",
    image: "/uploads/netflix.png",
    shortDesc: "Ultra HD streaming on 4 devices simultaneously.",
    subscriptionType: "Monthly",
    MaxPersons: 4,
    longDesc:
      "Netflix Premium plan offers Ultra HD (4K) streaming on up to 4 devices simultaneously. Includes all Netflix content, spatial audio support, and the ability to download on 6 devices.",
    price: 24.99,
  },
  {
    id: 8,
    title: "Spotify Family",
    image: "/uploads/spotify.png",
    shortDesc: "Premium for 6 family members with individual accounts.",
    subscriptionType: "Monthly",
    MaxPersons: 6,
    longDesc:
      "Spotify Family plan provides Premium features for up to 6 family members living at the same address. Each member gets their own account with personalized playlists and recommendations.",
    price: 19.99,
  },
  {
    id: 9,
    title: "Canva Teams",
    image: "/uploads/canva.webp",
    shortDesc: "Collaborative design platform for teams (min 3 users).",
    subscriptionType: "Monthly",
    MaxPersons: "3+ users",
    longDesc:
      "Canva Teams includes all Pro features plus team collaboration tools, brand controls, content planner, and approval workflows. Perfect for marketing teams and agencies. Minimum 3 users required.",
    price: 10, // per user per month
  },
  {
    id: 10,
    title: "YouTube Family",
    image: "/uploads/youtube.png",
    shortDesc: "Premium benefits for up to 6 family members.",
    subscriptionType: "Monthly",
    MaxPersons: 6,
    longDesc:
      "YouTube Premium Family plan provides ad-free YouTube and YouTube Music for up to 6 family members aged 13+. Each member gets their own account with personalized recommendations and playlists.",
    price: 22.99,
  },
];

export default function ProductCard() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Confirm before refresh
  useEffect(() => {
    const beforeUnloadHandler = (e) => {
      if (cart.length > 0) {
        e.preventDefault();
        e.returnValue =
          "You have items in your cart. Refreshing will clear them. Continue?";
      }
    };
    window.addEventListener("beforeunload", beforeUnloadHandler);
    return () =>
      window.removeEventListener("beforeunload", beforeUnloadHandler);
  }, [cart]);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
    alert(`${item.title} added to your cart.`);
  };

  return (
    <>
      <div className="bg-gray-900 ">
        <div className="container mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Featured Subscriptions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {productDetails.map((item) => (
              <Card
                key={item.id}
                title={item.title}
                description={item.shortDesc}
                image={item.image}
                subscriptionType={item.subscriptionType}
                maxPersons={item.MaxPersons}
                price={item.price}
                onClick={() => setSelectedProduct(item)}
                onAdd={() => handleAddToCart(item)}
              />
            ))}
          </div>

          {selectedProduct && (
            <QuickViewModal
              product={selectedProduct}
              onClose={() => setSelectedProduct(null)}
            />
          )}
        </div>
      </div>
    </>
  );
}
